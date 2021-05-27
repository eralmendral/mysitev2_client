import React from "react"
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import StyledTextField from '@Components/Styled/StyledTextField'
import SectionContainer from '@Containers/SectionContainer/SectionContainer'
import emailjs from "emailjs-com"
import { toast } from "react-toastify"
import './Contact.scss'

class ContactComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reply_to: "eralmendral@gmail.com",
      from_name: "",
      from_email: "",
      message: "",
      to_name: "Eric",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  emailSent = (event) => {
    event.preventDefault()
    const { reply_to, from_name, from_email, message, to_name } = this.state

    var template_params = {
      reply_to: reply_to,
      from_name: from_name,
      to_name: to_name,
      from_email: from_email,
      message: message,
    }

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID

    if (this.validateContent()) {
      return toast.error("Please add input to all fields.", { closeButton: false, hideProgressBar: true })
    }
    return emailjs
      .send(SERVICE_ID, TEMPLATE_ID, template_params, USER_ID)
      .then(() => {
        this.resetForm()
        toast.success("Email sent, have a good day!", { closeButton: false, hideProgressBar: true })
      })
      .catch((err) => {
        console.log(err)
        toast.error("Email failed to sent!", { closeButton: false, hideProgressBar: true })
      })
  }

  resetForm() {
    this.setState({
      from_name: "",
      from_email: "",
      message: "",
      to_name: "Eric",
    })
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  validateContent() {
    return !this.state.from_name ||
      !this.state.from_email ||
      !this.validateEmail(this.state.from_email) ||
      !this.state.message
  }

  render() {
    return (
      <div id="contact">
        <SectionContainer title="Contact" theme="dark">
          <div className="contact">
            <div className="contact-info">
              <ul>
                <li>+639 75 132 1678</li>
                <li><a href="mailto: ealmendral@gmail.com">ealmendral@gmail.com</a></li>
                <li><a href="https://fb.com/eralmendral" rel="noopener noreferrer" target="_blank">fb.com/eralmendral</a></li>
              </ul>
            </div>
          </div>
          <Box my={2}>
            <Container my={2}>
              <form id="emailForm" onSubmit={this.emailSent}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} >
                    <StyledTextField
                      label="Name"
                      type="text"
                      name="from_name"
                      value={this.state.from_name}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} >
                    <StyledTextField
                      label="Email"
                      type="email"
                      name="from_email"
                      value={this.state.from_email}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <StyledTextField
                      multiline
                      rows={5}
                      rowsMax={25}
                      label="Message"
                      type="text"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>

                <Button
                  disableElevation
                  color="primary"
                  type="submit"
                  name="submit"
                  disabled={
                    !this.state.from_name ||
                    !this.state.from_email ||
                    !this.validateEmail(this.state.from_email) ||
                    !this.state.message} >
                  Send
            </Button>
              </form>
            </Container>
          </Box>
        </SectionContainer>
      </div>
    )
  }
}

export default ContactComponent
