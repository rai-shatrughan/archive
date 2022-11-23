import React from 'react';

const items = ["bigbuck", "ed", "testsrc", "smptebars"];

export default class Center extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: items,
        };
    } 

    videoPath = (item) => {
        let path = "http://localhost:3200/vs?key="+item
        // console.log(path)
        return path
    }

    filterVideo = (evt) =>  {
        const val = evt.target.value;
        console.log(val)
        if (val === ""){
            this.setState({items: items});
        } else {
        const filterItems = this.state.items.filter(item => item.match(val));
        this.setState({items: filterItems});
        }
    }


    render() {
        return(
            <div>
            <form class="pure-form searchVideoForm">
                <input type="text" className="pure-input-1 searchVideoTextBox" placeholder="search video" onChange={evt => this.filterVideo(evt)}/>
                <br />
            </form>

            <div class="pure-g">
            {this.state.items.map((item) =>
                <div class="pure-u-1 pure-u-md-1-1 videoGrid"> 
                    <video className="videoItem" controls key={item}>
                        <source src={this.videoPath(item)} type="video/mp4"/>
                    </video>
                </div>
            )}
            </div>
            </div>
        )
    }

}