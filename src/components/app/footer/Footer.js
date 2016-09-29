import React from "react"
import github_img from "../../../resources/img/github.png"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="github-link">
                    <a href="https://github.com/powergrid-loadbalancer"><img src={github_img}/></a>
                </div>
            </div>
        )
    }
}