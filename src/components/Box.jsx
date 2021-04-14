import React, {Component} from 'react';

// function click(props){
//     if(!isTaken){
//         const cur = props.cur;
//         props.prop..currentchar.setState({cur});
//         props.prop.xoro = cur;
//         setIsTaken(true);
//     }
// }
class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
        xoro: "blank",
        boo: false
        }
    }
        // prop = {
        //     xoro: this.xoro,
        //     isTaken: this.isTaken,
        //     setIsTaken: this.setIsTaken,
        //     props: props
        // }

        //;this.props.c.setState({currentchar:"X"})}}
        //;this.props.c.setState({currentchar:"O"})}}
        
    render(){
        if(this.state.boo){
            return (
          <body>
          <div>
            <button>
                {this.state.xoro}
            </button>
          </div>
          </body>
        );
        }
        else if(this.props.c == "X")return(
            <body>
            <div>
            <button onClick={() => {this.setState({xoro: this.props.c,boo: true})}}>
                {this.state.xoro}
            </button>
            </div>
            </body>
        );
        return(
            <body>
            <div>
            <button onClick={() => {this.setState({xoro: this.props.c,boo: true})}}>
                {this.state.xoro}
            </button>
            </div>
            </body>
        );
    }      
}
export default Box;