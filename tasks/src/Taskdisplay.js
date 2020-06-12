import React, { Component } from 'react';
// import './Taskdisplay.css';

class Taskdisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }

    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + 'https://goaltrackerapi.herokuapp.com/tasks/phani1@gmail.com')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                    tasks: null
                })
            })
            .catch({

            })
    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="Taskdisplay">
                    <ul>
                        {items.map(item => (
                            <li key={item._id}>
                                Email:{item.email}
                                goal:{item.goal}
                                id:{item.goal._id}
                                <ul>
                                    {item.tasks.map(tsk => (
                                        <li>
                                            skillName:{tsk.skillName}
                                            <br />
                                                startdate:{tsk.start_date}
                                            <br />
                                                    end date:{tsk.end_date}
                                            <br />
                                                        total days:{tsk.totaldays}
                                            <br />
                                                            completed:{tsk.complete}

                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
          Data has been loaded
                </div>
            );
        }

    }
}

export default Taskdisplay;


