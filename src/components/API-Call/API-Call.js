import React, { Component } from "react";
import API from "../../utils/API"

export default class DataArray extends Component {
    state = {
        users: [{}],
        order: 'descend',
        filteredUsers: [{}]

    }

    handleSort = heading => {
        if (this.state.order === "descend") {
            this.setState({ order: 'ascend' })
        } else {
            this.setState({ order: 'descend' })
        }

        const compareFunc = (a, b) => {
            if (this.state.order === "ascend") {
                if (heading === "name") {
                    return a[heading].first.localCompare(b[heading].first)
                } else {
                    return a[heading] - b[heading]
                }
            } else {
                if (heading === "name") {
                    return b[heading].first.localCompare(a[heading].first)
                } else {
                    return b[heading] - a[heading]
                }
            }
        }
        const sortedUsers = this.state.filteredUsers.sort(compareFunc);
        this.setState({ filteredUsers: sortedUsers })
    }

    //do the search
    handleSearchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            // merge data together, then see if user input is anywhere inside
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });
    }



    //make the API call
    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    render() {
        return null;
    }


}