import React from 'react';
import Slider from '@material-ui/core/Slider';
import Switches from '../components/Switch';


class ValuesGrid extends React.Component {
    constructor(props) {
        super();
        this.user = {
            name: "blah",
            values: [
                {
                    belief: "China Tariffs",
                    stance: false,
                    importance: 100
                }
            ]
        }
    
    }
    
    render() {
        return (
            <React.Fragment>
                <ValueHeaders/>
                <Values key={"values"} user={this.user}/>
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
            <table style={{width: "100%"}}>
                {
                    this.values.map((value, i) => {     
                        return (<Value key={i} belief={value.belief} stance={value.stance} importance={value.importance}/>);
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
        //     <div class="container">
        //     <div class="row">
        //         <div class="col-sm">
        //             {this.belief}
        //          </div>
        //         <div class="col-sm">
        //             {this.stance.toString()}
        //          </div>
        //         <div class="col-sm">
        //             {this.importance}
        //         </div>
        //     </div>
        // </div>
            <tr>
                <td style={{width: "33%"}}>{this.belief}</td>
                <td style={{width: "33%"}}><Slider/></td>
                <td style={{width: "33%"}}>{this.importance}</td>
            </tr>
        );
    }

}

const ValueHeaders = (props) => {
    return (
        <tr>
            <th>Beliefs</th>
            <th>Stance</th>
            <th>Importance</th>
        </tr>
    );
};

export default ValuesGrid;

