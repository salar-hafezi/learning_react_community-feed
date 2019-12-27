import React, { Component } from 'react';

export default function withDataFetching(WrappedComponent) {
    class WithDataFetching extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                data: [],
                error: ''
            };
        }

        async componentDidMount() {
            try {
                const data = await fetch(this.props.dataSource);
                const dataJSON = await data.json();

                if (dataJSON) {
                    this.setState({
                        loading: false,
                        data: dataJSON
                    });
                }
            } catch (error) {
                this.setState({
                    loading: false,
                    error: error.message
                });
            }
        }


        render() {
            const { loading, data, error } = this.state;
            if (loading || error) return <div>{loading ? 'Loading...' : error}</div>;
            return <WrappedComponent
                data={data}
                {...this.props}
            />
        }
    }
    WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;
    return WithDataFetching;
}
