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

    handleTextField = field => (e) => {
        e.preventDefault();
        this.setState({[field]: e.target.value})
    }

    handleSchoolSelect = (e) => {
        this.setState({schoolType: e.target.value})
    };

    handleSchoolYearSelect = (e) => {
        this.setState({schoolYear: e.target.value})
    };

    handleHighSchoolYearSelect = (e) => {
        this.setState({highschoolYear: e.target.value})
    }

    handleRaceSelect = (e) => {
        this.setState({race: e.target.value})
    };

    handleGenderSelect = (e) => {
        this.setState({gender: e.target.value})
    };

    handlePreviousWork = (e) => {
        this.setState({previousWork: e.target.value})
    };

    handlePreviousVolunteer = (e) => {
        this.setState({previousVolunteer: e.target.value})
    };

    handlePrefferedDay = (e) => {
        this.setState({prefferedDay: e.target.value})
    };

    handleDateChange = (date) => {
        this.setState({dob: date});
    };

    handleStateSelect = (e) => {
        this.setState({state: e.target.value})
    }

    validateOnBlur = field => e => {
        e.preventDefault();
        const { nameRegex, emailRegex, addressRegex, onlyNumbersRegex, numbersAndLettersRegex } = regex;
        let errors = this.state.errors

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
            case 'collegeParagraph':
                this.setState({ errors: { ...errors, collegeParagraphError: this.state.collegeParagraph.length >= 500 || this.state.collegeParagraph.length === 0 } });
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

    validateForm = (errors, formValues) => {
        let valid = true;
        Object.values(errors).forEach(
          (val) => val === true && (valid = false)
        );
        return valid;
      }

    handleSubmit = e => {
        if(this.validateForm(this.state.errors, this.state)) {
            console.log("valid")
            return;
        }
        console.log("not valid")
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
                        onChange={this.handleTextField("name")}
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
                        onChange={this.handleTextField("prefferedName")}
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
                        onChange={this.handleTextField("email")}
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
                        onChange={this.handleTextField("confirmEmail")}
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
                            onChange={this.handleGenderSelect}
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
                            onChange={this.handleRaceSelect}
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
                        onChange={this.handleTextField("pronouns")}
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
                            onChange={this.handleTextField("language")}
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
                            id="education"
                            value={this.state.schoolType}
                            onBlur={this.validateOnBlur('education')}
                            onChange={this.handleSchoolSelect}
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
        if ( this.state.schoolType === 'highschool' ) {
            return null;
        }

        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField
                        required
                        error={this.state.errors.collegeError}
                        id="college/uni"
                        label="College/University"
                        value={this.state.college}
                        onChange={this.handleTextField("college")}
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
                        onChange={this.handleTextField("major")}
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
                                onChange={this.handleSchoolYearSelect}
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
                        onChange={this.handleTextField("collegeParagraph")}
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
                                onChange={this.handleHighSchoolYearSelect}
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
                        onChange={this.handleTextField("highschoolImpactfulBook")}
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
                        onChange={this.handleTextField("highschoolImpactfulBookParagraph")}
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
                        onChange={this.handleTextField("highschoolImportantBook")}
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
                        onChange={this.handleTextField("highschoolImportantBookParagraph")}
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
                        onChange={this.handleTextField("highschoolScholasticExp")}
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
                        onChange={this.handleTextField("highschoolPersonalInterests")}
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

        if ( this.state.schoolType === 'college' || this.state.schoolType === '') {
            return (
                <React.Fragment>
                    {collegeInfo}
                    {collegeExp}
                </React.Fragment>
            )
        }

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
                        onChange={this.handleTextField("address1")}
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
                        onChange={this.handleTextField("address2")}
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
                        onChange={this.handleTextField("city")}
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
                            onChange={this.handleStateSelect}
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
                        onChange={this.handleTextField("zip")}
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
                    <TextField
                        required
                        error={this.state.errors.availabilityError}
                        id="availability"
                        label="Availability (flexible, weekdays, weekends)"
                        value={this.state.availability}
                        onChange={this.handleTextField("availability")}
                        onBlur={this.validateOnBlur('availability')}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                    <TextField
                        required
                        error={this.state.errors.volunteerTimeError}
                        id="volunteerTime"
                        label="Preffered Volunteer Time (i.e. 90 minutes)"
                        value={this.state.volunteerTime}
                        onChange={this.handleTextField("volunteerTime")}
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
                                onChange={this.handlePrefferedDay}
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
                                id="workwithchildren"
                                value={this.state.previousWork}
                                onChange={this.handlePreviousWork}
                                onBlur={this.validateOnBlur('volunteerExp')}
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
                        onChange={this.handleTextField("volunteerOrg")}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <FormControl>
                    <div className="textAreaHeader">Have you previously volunteered with a nonprofit organization?</div>
                            <Select
                                required
                                error={this.state.errors.volunteerOrgError}
                                id="previousOrg"
                                value={this.state.previousVolunteer}
                                onChange={this.handlePreviousVolunteer}
                                onBlur={this.validateOnBlur('volunteerOrg')}
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
                        onChange={this.handleTextField("volunteerRole")}
                        fullWidth
                    />
                </Grid>
            </Grid>
        )
    }

    renderSubmit() {
        return(
            <div className="buttonContainer">
                <Button variant="contained" type="submit" onClick={this.handleSubmit}>
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
    
        return (
            <form onSubmit={this.handleSubmit}>
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

    render() {
        const navbar = <NavBar />;
        const header = this.renderHeader();
        const application = this.renderApplication();

        return (
            <React.Fragment>
                {navbar}
                {header}
                {application}
            </React.Fragment>
        );
    }
}

export default Apply;
