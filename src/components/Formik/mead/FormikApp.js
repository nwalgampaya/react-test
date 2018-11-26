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
            profession:[],
          };
          // this.handleChange = this.handleChange.bind(this);
      }; 
      
      componentDidMount() {
        // this.specificComplaint=111
        // this.setState(prevState => ({ values: [...prevState.values, ''] }))
        // this.setState(prevState => ({ values: [...prevState.values, '']}))
        // this.state.hideSpecialty=true
        // console.log("SEL PROF : " + this.state.selectedProfession)
    
        // const urlProfession = "http://128.250.143.10:8080/ProneSpringBoot/api/professions/";
        const urlProfession = "http://localhost:8090/ProneSpringBoot/api/practitioners/";
        // const urlProfession = properties.baseUrl + "professions/";
        fetch(urlProfession)
          .then(response => response.json())
          .then((data) => {
    
              
              
              this.setState({
                  profession: data,
                  
                });
                this.state.profession.map(
                          (read, i) => {
                            console.log("location :" + read.location +", "+ "specialty : "+read.specialty);
                            // console.log(read.specialty);
                            // console.log("age : " + read.age)
                            })
            // this.state.profession.push(data);
            console.log("data www:"+ this.state.profession[0] )
          })


          console.log("eeeeeeeee")
          var key = "age";
          var value = this.state.profession
          // console.log("age: " + value.age)
          // console.log("complaints: " + this.state.profession["complaints"] )
          // console.log("id: " + this.state.profession["id"] )
          // console.log("issueType: " + this.state.profession["issueType"] )
          // console.log("location: " + this.state.profession["location"] )



        //   const practitionersData = fetch('http://localhost:8090/ProneSpringBoot/api/practitioners/174');
        //   practitionersData
        //   .then(data => data.json())
        //   .then(data => {
        //       const practitionerFrequency = data.reduce((practitioners, value) => {
        //       practitioners[value.age] = practitioners[value.age] ? practitioners[value.age] + 1 : 1;
        //       return practitioners;
        //       }, {});
        //       console.log(practitionerFrequency);
        //   })
        //   .catch(err => console.log(err));

          const cityJobsData = fetch('https://data.cityofnewyork.us/resource/swhp-yxa4.json');
          cityJobsData
          .then(data => data.json())
          .then(data => {
              const agencyFrequency = data.reduce((agencies, value) => {
              agencies[value.agency] = agencies[value.agency] ? agencies[value.agency] + 1 : 1;
              return agencies;
              }, {});
              console.log(agencyFrequency);
          })
          .catch(err => console.log(err));
        }
        handleProfessionChange(e){
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
    return(    
  <Form>
    <div>
      { touched.email && errors.email && <p>{errors.email}</p> }
      <Field type="email" name="email" placeholder="Email"/>
    </div>
    <div>
      { touched.password && errors.password && <p>{errors.password}</p> }
      <Field type="password" name="password" placeholder="Password"/>
    </div>
    <label>
      <Field type="checkbox" name="newsletter" checked={values.newsletter}/>
      Join our newsletter
    </label>
    {/* <Field component="select" name="plan"> */}
    {/* <option value="free">Free</option>
    <option value="premium">Premium</option> */}
  
    <select className="form-control dorp-box" id="idProf" value={this.state.selectedProfession} onChange={this.handleProfessionChange.bind(this)} name="professioncolumn">{
    this.state.profession.map((read, i) => {
        this.state.read = read.name;
        // console.log("age - " + read.age)
        // console.log("id - " + read.id)
        // console.log("profession ID :  " + read.id);
        return <option key={read.value} value={read.id}>{read.age}</option>
      })
      
    }
    </select>      
    {/* </Field> */}
      <button type ="submit" disabled={isSubmitting}>Submit</button>
      </Form>
                  //   values.profession.map((read, i) => {
                  //                             // this.state.read = read.name;
                  //                             console.log("profession ID :  " + read.id);
                  //                             return <option key={read.value} value={read.id}>{read.name}</option>
                  //                           })
                  //                         }
);
}
  }

const FormikApp = withFormik({
    
  mapPropsToValues({ email, password, newsletter, plan,profession }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || 'free',
      profession: ["1",'2','3']|| profession,
    }
},

componentDidMount() {
    // this.specificComplaint=111
    // this.setState(prevState => ({ values: [...prevState.values, ''] }))
    // this.setState(prevState => ({ values: [...prevState.values, '']}))
    // this.state.hideSpecialty=true
    // console.log("SEL PROF : " + this.state.selectedProfession)

    // const urlProfession = "http://128.250.143.10:8080/ProneSpringBoot/api/professions/";
    const urlProfession = "http://localhost:8090/ProneSpringBoot/api/practitioners/";
    // const urlProfession = properties.baseUrl + "professions/";
    fetch(urlProfession)
      .then(response => response.json())
      .then((data) => {

        console.log(data);
        this.setState({
          profession: data,

        });
        // this.state.profession.push(data);
      })



    },

  
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log("SUBMIT HANDLE")
    setTimeout(() => {
      if(values.email === 'andrew@test.io') {
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
