import React, { Component } from 'react'
import { withTheme } from 'styled-components'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { FormWrapper } from '../../../../Reusables/FormWrapper'
import { InputWrapper, Label, RadioButtonWrapper } from '../../style'
import Textfield from '../../../../Reusables/inputs/text-field/text-field'
import Dropdown from '../../../../Reusables/inputs/drop-down/drop-down'
import { Button } from '../../../../Reusables/Button'
import PaperPresentationFormBg from './PaperPresentationBg'
import arrowDownIcon from '../../../../Assets/Images/arrow-down.png'
import RadioButton from '../../../../Reusables/inputs/RadioButton/RadioButton'
import Checkbox from '../../../../Reusables/inputs/check-box/checkbox'
import InputGroup from '../../../../Reusables/inputs/InputGroup/InputGroup'

import {
    validateTextFields,
    validateDropdowns,
    validateRadioButtons,
} from '../../../../utils/FormValidator'
import { DEPARTMENTS } from '../../../../utils/constants'
import { Loader } from '../../../../Reusables/ButtonLoader'
import { registerPaperPresentationEvent } from '../../../../redux/Events/TechEvents/Actions'
import { Helmet } from 'react-helmet'
import ScrollToTop from '../../../../utils/ScrollToTop'

class PaperPresentationForm extends Component {
    state = {
        textfields: [
            {
                id: 'gaming-form-0',
                inputType: 'text',
                state: 'normal',
                name: 'name1',
                label: 'Name',
                placeholder: 'John',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-1',
                inputType: 'text',
                state: 'normal',
                name: 'name2',
                label: '',
                placeholder: 'John',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-2',
                inputType: 'email',
                state: 'normal',
                name: 'email1',
                label: 'Email ID',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-3',
                inputType: 'email',
                state: 'normal',
                name: 'email2',
                label: '',
                placeholder: 'johndoe@gmail.com',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-4',
                inputType: 'text',
                state: 'normal',
                name: 'college name',
                label: 'College Name',
                placeholder: 'Sri Sairam Engineering College',
                value: '',
                readOnly: false,
            },
            {
                id: 'gaming-form-5',
                inputType: 'number',
                state: 'normal',
                name: 'phone number',
                label: 'Phone Number',
                placeholder: '9632587412',
                value: '',
                readOnly: false,
            },
        ],
        dropdowns: [
            {
                toggle: false,
                value: '',
                field: {
                    id: 'gaming-form-6',
                    inputType: 'text',
                    state: 'normal',
                    name: 'department',
                    label: 'Department',
                    placeholder: 'Select your Department',
                    value: '',
                    imgBtn: arrowDownIcon,
                    readOnly: true,
                },
                dropdown: DEPARTMENTS.map((department, idx) => ({
                    id: `dropdown-${idx + 1}`,
                    name: department,
                    state: 'not selected',
                })),
            },
        ],
        radioButtons: [
            {
                label: 'Year',
                name: 'year',
                error: '',
                options: [
                    {
                        id: 'gaming-form-rb-0',
                        active: false,
                        label: 'I',
                    },
                    {
                        id: 'gaming-form-rb-1',
                        active: false,
                        label: 'II',
                    },
                    {
                        id: 'gaming-form-rb-2',
                        active: false,
                        label: 'III',
                    },
                    {
                        id: 'gaming-form-rb-3',
                        active: false,
                        label: 'IV',
                    },
                ],
            },
        ],
        checkboxs: [
            {
                id: 1,
                name: 'team-or-single',
                checkState: false,
                state: 'normal',
            },
        ],
    }

    handleInputValueChange = (event) => {
        let textfields = this.state.textfields.concat()
        textfields.map((field) => {
            if (field.name === event.target.name) {
                field.value = event.target.value
            }
            return field
        })

        this.setState({
            textfields,
        })
    }

    handleDropdowntoggle = (index) => {
        let dropdowns = this.state.dropdowns.concat()
        let dropdownMenu = dropdowns[index]
        dropdownMenu.toggle = !dropdownMenu.toggle

        this.setState({
            dropdowns,
        })
    }

    handleDropdownClick = (index, clickDropdown) => {
        let dropdowns = this.state.dropdowns.concat()
        let dropdownMenu = dropdowns[index]
        dropdownMenu.dropdown.forEach((dropdown) => {
            if (
                dropdown.name === clickDropdown &&
                dropdown.state !== 'selected'
            ) {
                dropdown.state = 'selected'
                dropdownMenu.value = clickDropdown
                dropdownMenu.field.value = clickDropdown
            } else {
                dropdown.state = 'not selected'
            }
        })

        this.setState({
            dropdowns,
        })

        const scope = this
        setTimeout(() => {
            scope.handleDropdowntoggle(index)
        }, 150)
    }

    handleRadioButtonClick = (index, id) => {
        const radioButtons = this.state.radioButtons.concat()
        radioButtons[index].options.forEach((option) => {
            if (option.id === id) {
                option.active = true
            } else {
                option.active = false
            }
        })

        this.setState({ radioButtons })
    }

    handleCheckboxValueChange = (idx) => {
        let checkboxs = this.state.checkboxs
        checkboxs[idx].checkState = checkboxs[idx].checkState ? false : true
        this.setState({
            checkboxs,
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        let textfields = this.state.textfields.concat()
        let dropdowns = this.state.dropdowns.concat()
        let radioButtons = this.state.radioButtons.concat()
        const checkbox = this.state.checkboxs[0]

        const [validatedTextfields, isTextFieldsValid] = validateTextFields(
            checkbox.checkState
                ? [textfields[0], textfields[2], textfields[4], textfields[5]]
                : textfields
        )
        const [validatedDropdowns, isDropdownValid] = validateDropdowns(
            dropdowns
        )
        const [
            validatedRadioButtons,
            isRadioButtonValid,
        ] = validateRadioButtons(radioButtons)

        this.setState({
            validatedTextfields,
            validatedDropdowns,
            validatedRadioButtons,
        })
        if (isTextFieldsValid && isDropdownValid && isRadioButtonValid) {
            var year = null
            this.state.radioButtons[0].options.forEach((option) => {
                if (option.active) year = option.label
            })
            const data = {
                members: [
                    {
                        name: this.state.textfields[0].value,
                        emailId: this.state.textfields[2].value,
                        collegeName: this.state.textfields[4].value,
                        mobileNumber: this.state.textfields[5].value,
                        dept: this.state.dropdowns[0].value,
                        year,
                    },
                ],
            }

            if (!checkbox.checkState)
                data.members.push({
                    name: this.state.textfields[1].value,
                    emailId: this.state.textfields[3].value,
                    collegeName: this.state.textfields[4].value,
                    mobileNumber: this.state.textfields[5].value,
                    dept: this.state.dropdowns[0].value,
                    year,
                })

            this.props.registerPaperPresentationEvent(data)
        }
    }

    render() {
        const field = this.state.textfields
        const { checkboxs } = this.state
        return (
            <>
                <ScrollToTop />
                <Helmet>
                    <title>Synsara'20 - Udhi Event</title>
                    <meta
                        name="description"
                        content="Registration form for Paper Presentation event"
                    />
                </Helmet>
                <FormWrapper formName="Udhi">
                    <PaperPresentationFormBg />
                    <InputWrapper>
                        <Checkbox
                            checkbox={this.state.checkboxs[0]}
                            handleCheckboxValueChange={this.handleCheckboxValueChange.bind(
                                this,
                                0
                            )}
                        >
                            Single participant?
                        </Checkbox>
                        {checkboxs[0].checkState ? (
                            <>
                                <Textfield
                                    textfield={field[0]}
                                    handleInputValueChange={
                                        this.handleInputValueChange
                                    }
                                />
                                <Textfield
                                    textfield={field[2]}
                                    handleInputValueChange={
                                        this.handleInputValueChange
                                    }
                                />
                                <Textfield
                                    textfield={field[4]}
                                    handleInputValueChange={
                                        this.handleInputValueChange
                                    }
                                />
                                <Dropdown
                                    dropdownMenu={this.state.dropdowns[0]}
                                    handleDropdowntoggle={() =>
                                        this.handleDropdowntoggle(0)
                                    }
                                    handleDropdownClick={(name) =>
                                        this.handleDropdownClick(0, name)
                                    }
                                />
                                <div style={{ height: '9rem' }}>
                                    <Label state="normal" size="1.5rem">
                                        {this.state.radioButtons[0].label}
                                    </Label>
                                    <RadioButtonWrapper>
                                        {this.state.radioButtons[0].options.map(
                                            (button) => (
                                                <RadioButton
                                                    key={button.id}
                                                    {...button}
                                                    radioBtnClick={(id) =>
                                                        this.handleRadioButtonClick(
                                                            0,
                                                            id
                                                        )
                                                    }
                                                />
                                            )
                                        )}
                                    </RadioButtonWrapper>
                                    <Label state="error" size="1.25rem">
                                        {this.state.radioButtons[0].error}
                                    </Label>
                                </div>
                                <Textfield
                                    textfield={field[5]}
                                    handleInputValueChange={
                                        this.handleInputValueChange
                                    }
                                />
                            </>
                        ) : (
                            <>
                                <InputGroup
                                    textfields={[
                                        { ...field[0], label: '' },
                                        field[1],
                                    ]}
                                    label="Name"
                                    theme={this.props.theme}
                                    onchangeHandler={
                                        this.handleInputValueChange
                                    }
                                    rows={1}
                                />
                                <InputGroup
                                    textfields={[
                                        { ...field[2], label: '' },
                                        field[3],
                                    ]}
                                    label="Email ID"
                                    theme={this.props.theme}
                                    onchangeHandler={
                                        this.handleInputValueChange
                                    }
                                    rows={1}
                                />
                                <Textfield
                                    textfield={field[4]}
                                    handleInputValueChange={
                                        this.handleInputValueChange
                                    }
                                />
                                <Dropdown
                                    dropdownMenu={this.state.dropdowns[0]}
                                    handleDropdowntoggle={() =>
                                        this.handleDropdowntoggle(0)
                                    }
                                    handleDropdownClick={(name) =>
                                        this.handleDropdownClick(0, name)
                                    }
                                />
                                <div style={{ height: '9rem' }}>
                                    <Label state="normal" size="1.5rem">
                                        {this.state.radioButtons[0].label}
                                    </Label>
                                    <RadioButtonWrapper>
                                        {this.state.radioButtons[0].options.map(
                                            (button) => (
                                                <RadioButton
                                                    key={button.id}
                                                    {...button}
                                                    radioBtnClick={(id) =>
                                                        this.handleRadioButtonClick(
                                                            0,
                                                            id
                                                        )
                                                    }
                                                />
                                            )
                                        )}
                                    </RadioButtonWrapper>
                                    <Label state="error" size="1.25rem">
                                        {this.state.radioButtons[0].error}
                                    </Label>
                                </div>
                                <Textfield
                                    textfield={field[5]}
                                    handleInputValueChange={
                                        this.handleInputValueChange
                                    }
                                />
                            </>
                        )}
                    </InputWrapper>
                    <Button
                        onClick={this.handleFormSubmit}
                        disabled={this.props.isLoading}
                    >
                        {this.props.isLoading ? <Loader /> : 'SUBMIT'}
                    </Button>
                </FormWrapper>
            </>
        )
    }
}

const mapStateToProps = ({ techEvents }) => ({
    isLoading: techEvents.isLoading,
    isError: techEvents.isError,
    isPaperPresentationRegistered: techEvents.isPaperPresentationRegistered,
})

const mapDispatchToProps = {
    registerPaperPresentationEvent,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withTheme
)(PaperPresentationForm)
