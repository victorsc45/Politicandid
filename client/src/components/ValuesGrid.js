import React from 'react';
import Slider from '../components/Slider';
import Switches from '../components/Switch';
// import ValueHeaders from './ValueHeaders';



class ValuesGrid extends React.Component {
    constructor(props) {
        super();
        this.user = {
            name: "blah",
            values: [
                {
                    belief: "China Tariffs",
                    stance: false,
                    importance: null
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <Values key={"values"} user={this.user} />
            </React.Fragment>
        )
    }
}

class Values extends React.Component {
    constructor(props) {
        super();
        this.values = props.user.values;
    }

    render() {
        return (
            <table style={{ width: "100%" }}>
                {
                    this.values.map((value, i) => {
                        return (<Value key={i} belief={value.belief} stance={value.stance} importance={value.importance} />);
                    })
                }
            </table>
        );
    }
}


class Value extends React.Component {


    constructor(props) {
        super();
        this.belief = props.belief;
        this.stance = props.stance;
        this.importance = props.importance;
    }

    render() {
        return (
            <div class="container">
                <div className="row center">
                    <div class="col-sm">
                        {this.belief}
                    </div>
                    <div class="col-sm">
                        {/* {this.stance.toString()} */}
                        <Switches />
                    </div>
                    <div class="col-sm ">
                        {/* {this.importance} */}
                        <Slider />
                    </div>
                </div>
            </div>
            // <tr>
            //     <td style={{width: "10px"}}>{this.belief}</td>
            //     <td style={{width: "10px"}}><Slider/></td>
            //     <td style={{width: "10px"}}><Switches/></td>
            // </tr>
        );
    }

}


export default ValuesGrid;

