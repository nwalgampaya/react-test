import React from 'react'
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

// const App = ({
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      age: ''
      // profession: [],
    };
    // this.handleChange = this.handleChange.bind(this);
  };
getPractitionerData(){
  const urlProfession = "http://localhost:8090/ProneSpringBoot/api/practitioners/175/";
  // const urlProfession = properties.baseUrl + "professions/";
  fetch(urlProfession)
    .then(response => response.json())
    .then((data) => {

        
        
        this.setState({
            profession: data,
            
          });
          this.state.profession.map(
                    (read, i) => {
                      console.log("location :" + read.location +", "+ "age  : "+read.age);
                      this.setState({

                        age : read.age
                      })
                      // console.log(read.specialty);
                      // console.log("age : " + read.age)
                      })
      // this.state.profession.push(data);
      console.log("data www:"+ this.state.profession[0] )
    })
}
  componentDidMount() {
    console.log("started")

    this.getPractitionerData();

  }
  handleProfessionChange(e) {
    // console.log("handleProfessionChange : " + e)
    this.state.profession.map((read, i) => {
      // console.log("age : " + read.age)
    })
  }
  render() {
    const {
      values,
      errors,
      touched,
      isSubmitting

    } = this.props;


    // }) => (
    return (
      <Form>
        <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email" />
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
       <div>
          {touched.age && errors.age && <p>{errors.age}</p>}
          <Field type="text" name="age" placeholder={this.state.age} />
        </div> 
        <label>
          <Field type="checkbox" name="newsletter" checked={values.newsletter} />
          Join our newsletter
    </label>
        {/* <Field component="select" name="plan"> */}
        {/* <option value="free">Free</option>
    <option value="premium">Premium</option> */}

        <select className="form-control dorp-box" id="idProf" value={this.state.selectedProfession} onChange={this.handleProfessionChange.bind(this)} name="professioncolumn">{
        //  values.profession.map((read, i) => {
        //     this.state.read = read.name;
        //     // console.log("age - " + read.age)
        //     // console.log("id - " + read.id)
        //     // console.log("profession ID :  " + read.id);
        //     return <option key={read.value} value={read.id}>{read.age}</option>
        //   })

        }
        </select>
        {/* </Field> */}
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </Form>

    );
  }
}

const FormikApp = withFormik({

  mapPropsToValues({ email, password, newsletter, plan, profession}) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || 'free',
      // age: age || 23
      // profession= ["key1":"1", "key2":'2',"key3": '3'],
    }
  },

  


  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log("in handleSubmit")
    setTimeout(() => {
      if (values.email === 'andrew@test.io') {
        setErrors({ email: 'That email is already taken' })
      } else {
        resetForm()
      }
      setSubmitting(false)
    }, 2000)
  }
})(App)

export default FormikApp;
// render(<FormikApp />, document.getElementById('root'))
