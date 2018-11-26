import React from 'react';
import ReactDOM from 'react-dom';

export default class AddRemove extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            ageData: [],
            age: [],
            ageFirst: '',
            firstTime: true
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI() {
        return this.state.values.map((el, i) =>
            <div key={i}>
                <input type="text" value={el || ''} onChange={this.handleChange.bind(this, i)} />

                <div className={i==0 ? "hidden" : ''}>
                    <input type='button' value={"remove" + el || ''} onClick={this.removeClick.bind(this, i)} />
                </div>


                <select className="form-control dorp-box" id={i + "idCompType"} value={this.state.age[i]} onChange={this.setAge.bind(this, i)} name="ageColumn"> {
                    this.state.ageData.map((ageGroup, i) => {
                        this.state.ageGroup = ageGroup.name;
                        console.log("location ID :  " + ageGroup.id);
                        return <option key={i} value={ageGroup.name}>{ageGroup.name}</option>
                    })
                }
                </select>

            </div>
        )
    }

    createFirstElement() {

        return <div>

            <select className="form-control dorp-box" id={"idCompFirstType"} value={this.state.age} onChange={this.setFirstAge.bind(this)} name="ageFirstColumn"> {
                this.state.ageData.map((ageGroup, i) => {
                    this.state.ageGroup = ageGroup.name;
                    console.log("location ID :  " + ageGroup.id);
                    return <option key={i} value={ageGroup.name}>{ageGroup.name}</option>
                })
            }
            </select>
        </div>
    }
    setFirstAge(event) {
        this.setState({
            ageFirst: event.target.value
        });
    }
    setAge(i, event) {
        console.log("Age :" + event.target.value);
        console.log("index :" + i);
        if (this.state.clearvalues == 1) {
            this.setState({
                age: '',
            });
        } else {

            let ageCopy = [...this.state.age];
            ageCopy[i] = event.target.value,
                this.setState({
                    age: ageCopy
                });
        }
        // this.setClearValue()
    }
    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }

    addClick() {
        this.setState(prevState => ({ values: [...prevState.values, ''] }))
        this.state.firstTime = false
    }

    removeClick(i) {
        let values = [...this.state.values];
        values.splice(i, 1);
        this.setState({ values });

        let age = [...this.state.age];
        // ageCopy[i]= event.target.value,
        age.splice(i, 1);
        this.setState({ age })
    }

    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.values.join(', '));
    //   event.preventDefault();
    // }

    componentDidMount() {

        this.setState(prevState => ({ values: [...prevState.values, ''] }))

        const urlAgegroup = "http://localhost:8090/ProneSpringBoot/api/ageRecs";
        // const urlAgegroup = properties.baseUrl + 'ageRecs';
        fetch(urlAgegroup)
            .then(response => response.json())
            .then((data) => {

                console.log(data);
                this.setState({

                    // flats: data
                    ageData: data

                });
            })
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                {/* {this.addClick} */}
                {this.createUI()}
                {/* {this.createFirstElement()} */}
                <br />
                <input type='button' value='add more' onClick={this.addClick.bind(this)} />
                {/* <input type="submit" value="Submit" /> */}
            </form>
        );
    }
}