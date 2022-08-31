import React from "react";
import { MainPage } from "../mainPage/MainPage";


class News extends React.Component{
    constructor(props){
        super(props);
        this.state=({statusMenu: false});
        this.handleMenu = this.handleMenu.bind(this)
    }
    handleMenu(){
        this.setState({statusMenu:!this.state.statusMenu  })
    }

    render(){
        return(
            <div>
                <h2>   {this.props.title}</h2>
                
                {this.state.statusMenu === true ? <MainPage/> :''}
             
                <button className="button" onClick={this.handleMenu}>Нажмите!</button>

            </div>
        )
    }
}
export default News;