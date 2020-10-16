import React, { Component } from 'react'
import 'date-fns';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import NavBar from '../NavBar/navBar'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import './apply.css'
import { states, regex } from './applyConstants';
import ApplyComplete from './applyComplete';
import emailjs from 'emailjs-com';

class Apply extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectOpen: false,
            dob: null,
            name: '',
            prefferedName: '',
            email: '',
            confirmEmail: '',
            pronouns: '',
            language: '',
            college: '',
            major: '',
            collegeParagraph: '',
            gender: '',
            race: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            volunteerRole: '',
            volunteerOrg: '',
            availability: '',
            volunteerTime: '',
            schoolType: '',
            schoolYear: '',
            previousWork: '',
            previousVolunteer: '',
            prefferedDay: '',
            highschoolYear: '',
            highschoolImpactfulBook: '',
            highschoolImpactfulBookParagraph: '',
            highschoolImportantBook: '',
            highschoolImportantBookParagraph: '',
            highschoolScholasticExp: '',
            highschoolPersonalInterests: '',
            formComplete: false,
            errors: {
                nameError: false,
                preferredNickNameError: false,
                dobError: false,
                emailError: false,
                confirmEmailError: false,
                genderError: false,
                raceError: false,
                languageError: false,
                educationError: false,
                collegeError: false,
                majorError: false,
                schoolYearError: false,
                collegeParagraphError: false,
                address1Error: false,
                cityError: false,
                stateError: false,
                zipError: false,
                availabilityError: false,
                volunteerTimeError: false,
                prefferedDayError: false,
                volunteerExpError: false,
                volunteerOrgError: false,
                highschoolYearError: false,
                highschoolImpactfulBookError: false,
                highschoolImpactfulBookParagraphError: false,
                highschoolImportantBookError: false,
                highschoolImportantBookParagraphError: false,
                highschoolScholasticExpError: false,
                highschoolPersonalInterestsError: false,
            }
        }
    }

    renderHeader() {
        return(
            <div className="header">
                <h1>MAKE A DIFFERENCE</h1>
            </div>
        );
    }

    handleFieldChange = field => (e) => {
        this.setState({[field]: e.target.value})
    }

    handleDateChange = (date) => {
        this.setState({dob: date});
    };

    validateOnBlur = field => e => {
        const { nameRegex, emailRegex, addressRegex, onlyNumbersRegex, numbersAndLettersRegex } = regex;
        let errors = this.state.errors;

        switch (field) {
            case 'name':
                this.setState({ errors: { ...errors, nameError: !nameRegex.test(e.target.value) } });
                break;
            case 'prefferedNickName':
                this.setState({ errors: { ...errors, prefferedNickNameError: !nameRegex.test(e.target.value) } });
                break;
            case 'dob':
                this.setState({ errors: { ...errors, dobError: this.state.dob === null } });
                break;
            case 'email':
                this.setState({ errors: { ...errors, emailError: !emailRegex.test(e.target.value) } });
                break;
            case 'confirmEmail':
                this.setState({ errors: { ...errors, confirmEmailError: !emailRegex.test(e.target.value) || this.state.confirmEmail !== this.state.email } });
                break;
            case 'gender':
                this.setState({ errors: { ...errors, genderError: this.state.gender === '' } });
                break;
            case 'race':
                this.setState({ errors: { ...errors, raceError: this.state.race === '' } });
                break;
            case 'language':
                this.setState({ errors: { ...errors, languageError: this.state.language === '' } });
                break;
            case 'education':
                this.setState({ errors: { ...errors, educationError: this.state.schoolType === '' } });
                break;
            case 'college':
                this.setState({ errors: { ...errors, collegeError: !nameRegex.test(e.target.value) } });
                break;
            case 'major':
                this.setState({ errors: { ...errors, majorError: !nameRegex.test(e.target.value) } });
                break;
            case 'schoolYear':
                this.setState({ errors: { ...errors, schoolYearError: this.state.schoolYear === '' } });
                break;
            case 'highschoolYear':
                this.setState({ errors: { ...errors, highschoolYearError: this.state.highschoolYear === '' } });
                break;
            case 'collegeParagraph':
                this.setState({ errors: { ...errors, collegeParagraphError: this.state.collegeParagraph.length >= 500 || this.state.collegeParagraph.length === 0 } });
                break;
            case 'highschoolImportantBookParagraph':
                this.setState({ errors: { ...errors, highschoolImportantBookParagraphError: this.state.highschoolImportantBookParagraph.length >= 200 || this.state.highschoolImportantBookParagraph.length === 0 } });
                break;
            case 'highschoolImpactfulBookParagraph':
                this.setState({ errors: { ...errors, highschoolImpactfulBookParagraphError: this.state.highschoolImpactfulBookParagraph.length >= 200 || this.state.highschoolImpactfulBookParagraph.length === 0 } });
                break;
            case 'highschoolScholasticExp':
                this.setState({ errors: { ...errors, highschoolScholasticExpError: this.state.highschoolScholasticExp.length >= 500 || this.state.highschoolScholasticExp.length === 0 } });
                break;
            case 'highschoolPersonalInterests':
                this.setState({ errors: { ...errors, highschoolPersonalInterestsError: this.state.highschoolPersonalInterests.length >= 500 || this.state.highschoolPersonalInterests.length === 0 } });
                break;
            case 'address1':
                this.setState({ errors: { ...errors, address1Error: !addressRegex.test(e.target.value) } });
                break;
            case 'city':
                this.setState({ errors: { ...errors, cityError: !nameRegex.test(e.target.value) } });
                break;
            case 'state':
                this.setState({ errors: { ...errors, stateError: this.state.state === '' } });
                break;
            case 'zip':
                this.setState({ errors: { ...errors, zipError: !onlyNumbersRegex.test(e.target.value) } });
                break;
            case 'availability':
                this.setState({ errors: { ...errors, availabilityError: !numbersAndLettersRegex.test(e.target.value) } });
                break;
            case 'volunteerTime':
                this.setState({ errors: { ...errors, volunteerTimeError: !numbersAndLettersRegex.test(e.target.value) } });
                break; 
            case 'prefferedDay':
                this.setState({ errors: { ...errors, prefferedDayError: this.state.prefferedDay === ''} });
                break;
            case 'volunteerExp':
                this.setState({ errors: { ...errors, volunteerExpError: this.state.volunteerExp === ''} });
                break;
            case 'volunteerOrg':
                this.setState({ errors: { ...errors, volunteerOrgError: this.state.volunteerOrg === ''} });
                break;     
            default: 
                break;
        }
    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
          (val) => val === true && (valid = false)
        );
        return valid;
      }

    handleSubmit = e => {
        if(this.validateForm(this.state.errors, this.state)) {
            this.setState({formComplete: true})

            let collegeForm = {
                subjectName: this.state.name,
                name: "Name: " + this.state.name,
                prefferedName: 'Nickname: ' + this.state.prefferedName,
                email: 'Email: ' +this.state.email,
                pronouns: 'Pronouns: ' + this.state.pronouns,
                language: 'Language: ' + this.state.language,
                college: 'College/University: ' + this.state.college,
                major: 'Major or area of focus: ' + this.state.major,
                collegeParagraph: 'How does your scholastic experience prepare you to be a volunteer tutor with our organization? (Max 500 characters): ' + this.state.collegeParagraph,
                gender: 'Gender: ' + this.state.gender,
                race: 'Race: ' + this.state.race,
                address1: 'Address line 1: ' + this.state.address1,
                address2: 'Address line 2: ' + this.state.address2,
                city: 'City: ' + this.state.city,
                state: 'State: ' + this.state.state,
                zip: 'Zip: ' + this.state.zip,
                volunteerRole: '(If Yes) Please List your role(s): ' + this.state.volunteerRole,
                volunteerOrg: '(If Yes) Please List your role(s): ' + this.state.volunteerOrg,
                availability: 'Availability: ' + this.state.availability,
                volunteerTime: 'Preffered volunteer time: ' + this.state.volunteerTime,
                schoolType: 'Current education: ' + this.state.schoolType,
                schoolYear: 'Current college year: ' + this.state.schoolYear,
                previousWork: 'Have you previously worked with children in a volunteer capacity?: ' + this.state.previousWork,
                previousVolunteer: 'Have you previously volunteered with a nonprofit organization?: ' + this.state.previousVolunteer,
                prefferedDay: 'Preffered volunteer day: ' + this.state.prefferedDay,
            }

            let highschoolForm = {
                subjectName: this.state.name,
                name: "Name: " + this.state.name,
                prefferedName: 'Nickname: ' + this.state.prefferedName,
                email: 'Email: ' +this.state.email,
                pronouns: 'Pronouns: ' + this.state.pronouns,
                language: 'Language: ' + this.state.language,
                gender: 'Gender: ' + this.state.gender,
                race: 'Race: ' + this.state.race,
                address1: 'Address line 1: ' + this.state.address1,
                address2: 'Address line 2: ' + this.state.address2,
                city: 'City: ' + this.state.city,
                state: 'State: ' + this.state.state,
                zip: 'Zip: ' + this.state.zip,
                volunteerRole: '(If Yes) Please List your role(s): ' + this.state.volunteerRole,
                volunteerOrg: '(If Yes) Please List your role(s): ' + this.state.volunteerOrg,
                availability: 'Availability: ' + this.state.availability,
                volunteerTime: 'Preffered volunteer time: ' + this.state.volunteerTime,
                schoolType: 'Current education: ' + this.state.schoolType,
                previousWork: 'Have you previously worked with children in a volunteer capacity?: ' + this.state.previousWork,
                previousVolunteer: 'Have you previously volunteered with a nonprofit organization?: ' + this.state.previousVolunteer,
                prefferedDay: 'Preffered volunteer day: ' + this.state.prefferedDay,
                highschoolYear: 'Highschool year: ' + this.state.highschoolYear,
                highschoolImpactfulBook: 'Most impactful book youve read for school?: ' + this.state.highschoolImpactfulBook ,
                highschoolImpactfulBookParagraph: 'Why? (In 200 words or less): ' + this.state.highschoolImpactfulBookParagraph,
                highschoolImportantBook: 'Most important book youve read for personal development?: ' + this.state.highschoolImportantBook,
                highschoolImportantBookParagraph: 'Why? (In 200 words or less): ' + this.state.highschoolImportantBookParagraph,
                highschoolScholasticExp: '​How does your scholastic experience prepare you to be a volunteer tutor with our organization?: ' + this.state.highschoolScholasticExp,
                highschoolPersonalInterests: 'What are you interested in?: ' + this.state.highschoolPersonalInterests,
            }

            let templateID = this.state.schoolType === 'highschool' ? 'template_lzkq4nl' : 'template_3b416ef';
            let application = this.state.schoolType === 'highschool' ? highschoolForm : collegeForm;
    
            emailjs.send('service_sumiwyh', templateID, application, 'user_G9vTuf1N4uUunWWpE7MHa')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            return;
        }
    }

    //Volunteer Info

    renderNameAndDOB() {
        return(
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField
                        required
                        error={this.state.errors.nameError}
                        id="name"
                        placeholder="First/Last"
                        label="Legal Name"
                        value={this.state.name}
                        onChange={this.handleFieldChange("name")}
                        onBlur={this.validateOnBlur("name")}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField
                        required
                        id="prefferedNickname"
                        label="Preffered Nickname"
                        value={this.state.prefferedName}
                        onChange={this.handleFieldChange("prefferedName")}
                        onBlur={this.validateOnBlur("prefferedName")}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            required
                            error={this.state.errors.dobError}
                            disableToolbar
                            variant="inline"
                            openTo="year"
                            format="MM/dd/yyyy"
                            id="DOB"
                            label="DOB"
                            value={this.state.dob}
                            onChange={this.handleDateChange}
                            onBlur={this.validateOnBlur("dob")}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
            </Grid>
        )
    }

    renderEmails() {
        return(
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                        error={this.state.errors.emailError}
                        required
                        id="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleFieldChange("email")}
                        onBlur={this.validateOnBlur("email")}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                        required
                        error={this.state.errors.confirmEmailError}
                        id="confirm-email"
                        label="Confirm Email"
                        value={this.state.confirmEmail}
                        onChange={this.handleFieldChange("confirmEmail")}
                        onBlur={this.validateOnBlur("confirmEmail")}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderGenderInfo() {
        return(
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <FormControl>
                        <InputLabel>Gender</InputLabel>
                            <Select
                            required
                            error={this.state.errors.genderError}
                            id="gender"
                            value={this.state.gender}
                            onChange={this.handleFieldChange('gender')}
                            onBlur={this.validateOnBlur("gender")}
                            fullWidth
                            >
                                <MenuItem value='male'>Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                                <MenuItem value='other'>Other</MenuItem>
                                <MenuItem value='prefernot'>Prefer not to say</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <FormControl>
                        <InputLabel>Race</InputLabel>
                            <Select
                            required
                            error={this.state.errors.raceError}
                            id="Race"
                            value={this.state.race}
                            onChange={this.handleFieldChange('race')}
                            onBlur={this.validateOnBlur("race")}
                            fullWidth
                            >
                                <MenuItem value='alaska-indian'>American Indian or Alaska Native</MenuItem>
                                <MenuItem value='asian'>Asian</MenuItem>
                                <MenuItem value='black-aa'>Black or African American</MenuItem>
                                <MenuItem value='latino-hispanic'>Hispanic or Latino</MenuItem>
                                <MenuItem value='hawaiin'>Native Hawaiin or other Pacific Islander</MenuItem>
                                <MenuItem value='white'>White</MenuItem>
                                <MenuItem value='other'>Other</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <TextField
                        id="pronouns"
                        label="Pronouns"
                        value={this.state.pronouns}
                        onChange={this.handleFieldChange("pronouns")}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                        <TextField
                            required
                            error={this.state.errors.languageError}
                            id="language"
                            label="Primary Language"
                            value={this.state.language}
                            onChange={this.handleFieldChange("language")}
                            onBlur={this.validateOnBlur("language")}
                            fullWidth
                        />
                </Grid>
            </Grid>
        )
    }

    //College Info

    renderSchoolSelect() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                <FormControl>
                    <InputLabel>Education</InputLabel>
                        <Select
                            required
                            error={this.state.errors.educationError}
                            name="education"
                            value={this.state.schoolType}
                            onBlur={this.validateOnBlur('education')}
                            onChange={this.handleFieldChange('schoolType')}
                        >
                            <MenuItem value='college'>College</MenuItem>
                            <MenuItem value='highschool'>Highschool</MenuItem>
                        </Select>
                </FormControl>
                </Grid>
            </Grid>
        )
    }

    renderCollegeInfo() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField
                        required
                        error={this.state.errors.collegeError}
                        id="college/uni"
                        label="College/University"
                        value={this.state.college}
                        onChange={this.handleFieldChange("college")}
                        onBlur={this.validateOnBlur('college')}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <TextField
                        required
                        error={this.state.errors.majorError}
                        id="major"
                        label="Major/Area of Focus"
                        onChange={this.handleFieldChange("major")}
                        onBlur={this.validateOnBlur('major')}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <FormControl>
                        <InputLabel>School Year</InputLabel>
                            <Select
                                required
                                error={this.state.errors.schoolYearError}
                                id="schoolYear"
                                value={this.state.schoolYear}
                                onChange={this.handleFieldChange('schoolYear')}
                                onBlur={this.validateOnBlur('schoolYear')}
                            >
                                <MenuItem value='freshman'>Freshman</MenuItem>
                                <MenuItem value='sophomore'>Sophomore</MenuItem>
                                <MenuItem value='junior'>Junior</MenuItem>
                                <MenuItem value='senior'>Senior</MenuItem>
                                <MenuItem value='graduate'>Graduate Program</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
            </Grid>
        )
    }

    renderCollegeExperience() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <InputLabel>How does your scholastic experience prepare you to be a volunteer tutor with our organization? (Max 500 characters)</InputLabel>
                    <TextField
                        required
                        id="reason"
                        error={this.state.errors.collegeParagraphError}
                        fullWidth
                        multiline={true}
                        rows={3}
                        variant="outlined"
                        value={this.state.collegeParagraph}
                        onChange={this.handleFieldChange("collegeParagraph")}
                        onBlur={this.validateOnBlur('collegeParagraph')}
                    />
                </Grid>
            </Grid>
        )
    }

    renderHighschoolSchoolYear() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <FormControl>
                        <InputLabel>School Year</InputLabel>
                            <Select
                                required
                                error={this.state.errors.highschoolYearError}
                                id="highschoolYear"
                                value={this.state.highschoolYear}
                                onChange={this.handleFieldChange('highschoolYear')}
                                onBlur={this.validateOnBlur('highschoolYear')}
                            >
                                <MenuItem value='freshman'>Freshman</MenuItem>
                                <MenuItem value='sophomore'>Sophomore</MenuItem>
                                <MenuItem value='junior'>Junior</MenuItem>
                                <MenuItem value='senior'>Senior</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
            </Grid>
        )
    }

    renderImpactfulBook() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputLabel>Most impactful book you've read for school?</InputLabel>
                    <TextField
                        required
                        error={this.state.errors.highschoolImpactfulBookError}
                        id="highschoolImpactfulBook"
                        value={this.state.highschoolImpactfulBook}
                        onChange={this.handleFieldChange("highschoolImpactfulBook")}
                        onBlur={this.validateOnBlur('highschoolImpactfulBookError')}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderImpactfulBookParagraph() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <InputLabel>Why? (In 200 words or less)</InputLabel>
                    <TextField
                        required
                        id="impactfulBookPara"
                        error={this.state.errors.highschoolImpactfulBookParagraphError}
                        fullWidth
                        multiline={true}
                        rows={3}
                        variant="outlined"
                        value={this.state.highschoolImpactfulBookParagraph}
                        onChange={this.handleFieldChange("highschoolImpactfulBookParagraph")}
                        onBlur={this.validateOnBlur('highschoolImpactfulBookParagraphError')}
                    />
                </Grid>
            </Grid>
        )
    }

    renderImportantBook() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputLabel>Most important book you've read for personal development?</InputLabel>
                    <TextField
                        required
                        error={this.state.errors.highschoolImportantBookError}
                        id="highschoolImportantBook"
                        value={this.state.highschoolImportantBook}
                        onChange={this.handleFieldChange("highschoolImportantBook")}
                        onBlur={this.validateOnBlur('highschoolImportantBookError')}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderImportantBookParagraph() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <InputLabel>Why? (In 200 words or less)</InputLabel>
                    <TextField
                        required
                        id="importantBookPara"
                        error={this.state.errors.highschoolImportantBookParagraphError}
                        fullWidth
                        multiline={true}
                        rows={3}
                        variant="outlined"
                        value={this.state.highschoolImportantBookParagraph}
                        onChange={this.handleFieldChange("highschoolImportantBookParagraph")}
                        onBlur={this.validateOnBlur('highschoolImportantBookParagraphError')}
                    />
                </Grid>
            </Grid>
        )
    }

    renderScholasticExp() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <InputLabel>How does your scholastic experience prepare you to be a volunteer tutor with our organization?</InputLabel>
                    <TextField
                        required
                        id="scholaticExp"
                        error={this.state.errors.highschoolScholasticExpError}
                        fullWidth
                        multiline={true}
                        rows={2}
                        variant="outlined"
                        value={this.state.highschoolScholasticExp}
                        onChange={this.handleFieldChange("highschoolScholasticExp")}
                        onBlur={this.validateOnBlur('highschoolScholasticExpError')}
                    />
                </Grid>
            </Grid>
        )
    }

    renderPersonalInterests() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <InputLabel>What are you interested in?</InputLabel>
                    <TextField
                        required
                        id="personalInterests"
                        error={this.state.errors.highschoolPersonalInterestsError}
                        fullWidth
                        multiline={true}
                        rows={2}
                        variant="outlined"
                        value={this.state.highschoolPersonalInterests}
                        onChange={this.handleFieldChange("highschoolPersonalInterests")}
                        onBlur={this.validateOnBlur('highschoolPersonalInterestsError')}
                    />
                </Grid>
            </Grid>
        )
    }

    renderSchoolInfo() {
        const collegeInfo = this.renderCollegeInfo();
        const collegeExp = this.renderCollegeExperience();
        const highschoolYear = this.renderHighschoolSchoolYear();
        const impactfulBook = this.renderImpactfulBook();
        const impactfulBookPara = this.renderImpactfulBookParagraph();
        const importantBook = this.renderImportantBook();
        const importantBookPara = this.renderImportantBookParagraph();
        const scholasticExp = this.renderScholasticExp();
        const personalInterest = this.renderPersonalInterests();

        if ( this.state.schoolType === 'college') {
            return (
                <React.Fragment>
                    {collegeInfo}
                    {collegeExp}
                </React.Fragment>
            )
        }

        if ( this.state.schoolType === 'highschool') {
            return (
                <React.Fragment>
                    {highschoolYear}
                    {impactfulBook}
                    {impactfulBookPara}
                    {importantBook}
                    {importantBookPara}
                    {scholasticExp}
                    {personalInterest}
                </React.Fragment>
            )
        }
    }

    //Personal Info

    renderAddress1() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        required
                        error={this.state.errors.address1Error}
                        id="address1"
                        label="Address Line 1"
                        value={this.state.address1}
                        onChange={this.handleFieldChange("address1")}
                        onBlur={this.validateOnBlur('address1')}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderAddress2() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        id="address2"
                        label="Address Line 2"
                        value={this.state.address2}
                        onChange={this.handleFieldChange("address2")}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderCityStateZip(){
        const stateMenu = states.map(state => <MenuItem value={state} key={state}>{state}</MenuItem>)

        return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField
                        required
                        error={this.state.errors.cityError}
                        id="City"
                        label="City"
                        value={this.state.city}
                        onChange={this.handleFieldChange("city")}
                        onBlur={this.validateOnBlur('city')}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <FormControl>
                    <InputLabel>State</InputLabel>
                        <Select
                            required
                            error={this.state.errors.stateError}
                            id="state"
                            value={this.state.state}
                            onChange={this.handleFieldChange('state')}
                            onBlur={this.validateOnBlur('state')}
                        >
                            {stateMenu}
                        </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField
                        required
                        error={this.state.errors.zipError}
                        id="zip"
                        label="Zip Code"
                        value={this.state.zip}
                        onChange={this.handleFieldChange("zip")}
                        onBlur={this.validateOnBlur('zip')}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderAvailability() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                <InputLabel>Availability (flexible, weekdays, weekends)</InputLabel>
                    <TextField
                        required
                        error={this.state.errors.availabilityError}
                        id="availability"
                        value={this.state.availability}
                        onChange={this.handleFieldChange("availability")}
                        onBlur={this.validateOnBlur('availability')}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <InputLabel>Preffered Volunteer Time (i.e. 90 minutes)</InputLabel>
                    <TextField
                        required
                        error={this.state.errors.volunteerTimeError}
                        id="volunteerTime"
                        value={this.state.volunteerTime}
                        onChange={this.handleFieldChange("volunteerTime")}
                        onBlur={this.validateOnBlur('volunterTime')}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <FormControl>
                    <div className="textAreaHeader">Preferred Volunteer Day</div>
                            <Select
                                required
                                error={this.state.errors.prefferedDayError}
                                id="prefferedDay"
                                value={this.state.prefferedDay}
                                onChange={this.handleFieldChange('prefferedDay')}
                                onBlur={this.validateOnBlur('prefferedDay')}
                            >
                                <MenuItem value='monday'>Monday</MenuItem>
                                <MenuItem value='tuesday'>Tuesday</MenuItem>
                                <MenuItem value='wednesday'>Wednesday</MenuItem>
                                <MenuItem value='thursday'>Thursday</MenuItem>
                                <MenuItem value='friday'>Friday</MenuItem>
                                <MenuItem value='saturday'>Saturday</MenuItem>
                                <MenuItem value='sunday'>Sunday</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
            </Grid>
        )
    }

    //Previous Volunteer Exp

    renderVolunteerExp() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <FormControl>
                    <div className="textAreaHeader">Have you previously worked with children in a volunteer capacity?</div>
                            <Select
                                required
                                error={this.state.errors.volunteerExpError}
                                id="previousWork"
                                value={this.state.previousWork}
                                onChange={this.handleFieldChange('previousWork')}
                                onBlur={this.validateOnBlur('previousWork')}
                            >
                                <MenuItem value='yes'>Yes</MenuItem>
                                <MenuItem value='no'>No</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        id="volunteerOrg"
                        label="(If Yes) List name of organization(s)"
                        value={this.state.volunteerOrg}
                        onChange={this.handleFieldChange("volunteerOrg")}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <FormControl>
                    <div className="textAreaHeader">Have you previously volunteered with a nonprofit organization?</div>
                            <Select
                                required
                                error={this.state.errors.volunteerOrgError}
                                id="previousVolunteer"
                                value={this.state.previousVolunteer}
                                onChange={this.handleFieldChange('previousVolunteer')}
                                onBlur={this.validateOnBlur('previousVolunteer')}
                            >
                                <MenuItem value='yes'>Yes</MenuItem>
                                <MenuItem value='no'>No</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                        id="volunteerRole"
                        label="(If Yes) Please List your role(s)"
                        value={this.state.volunteerRole}
                        onChange={this.handleFieldChange("volunteerRole")}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderSubmit() {
        return(
            <div className="buttonContainer">
                <Button variant="contained" type="submit">
                    APPLY
                </Button>
            </div>
        )
    }

    renderApplication() {
        const volunteerInfo = this.renderNameAndDOB();
        const volunteerInfo2 = this.renderEmails();
        const volunteerInfo3 = this.renderGenderInfo();
        const schoolSelect = this.renderSchoolSelect();
        const schoolInfo = this.renderSchoolInfo();
        const address1 = this.renderAddress1();
        const address2 = this.renderAddress2();
        const citystatezip = this.renderCityStateZip();
        const availability = this.renderAvailability();
        const volunteerExp = this.renderVolunteerExp();
        const submit = this.renderSubmit();
        const header = this.renderHeader();

        if(this.state.formComplete === true) {
            return null;
        }
    
        return (
            <form onSubmit={this.handleSubmit}>
                {header}
                <div className="formContainer">
                    <div className="appSection">
                    <div className="appSectionHeader">Volunteer Info</div>
                        {volunteerInfo}
                        {volunteerInfo2}
                        {volunteerInfo3} 
                    </div>
                    <div className="appSection">
                    <div className="appSectionHeader">Education Info</div>
                        {schoolSelect}
                        {schoolInfo}
                    </div>
                    <div className="appSection">
                    <div className="appSectionHeader">Personal Info</div>
                        {address1}
                        {address2}
                        {citystatezip}
                        {availability}
                    </div>
                    <div className="appSection">
                    <div className="appSectionHeader">Previous Volunteer Experience</div>
                        {volunteerExp}
                    </div>
                    {submit}
            </div>
            </form>
        );
    }

    renderFormSuccess() {
        if (this.state.formComplete === true) {
            return <ApplyComplete />
        }
    }

    render() {
        const navbar = <NavBar history={this.props.history} />;
        const application = this.renderApplication();
        const formSuccess = this.renderFormSuccess();

        return (
            <React.Fragment>
                {navbar}
                {formSuccess}
                {application}
            </React.Fragment>
        );
    }
}

export default Apply;
