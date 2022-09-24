const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: 'Stephen',
      sex: 'male',
    },
    {
      id: 2,
      age: 49,
      name: 'Judy',
      sex: 'female',
    },
    {
      id: 3,
      age: 19,
      name: 'Anastasia',
      sex: 'female',
    },
    {
      id: 4,
      age: 24,
      name: 'Howard',
      sex: 'male',
    },
  ],
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>User information</p>
    <p>
      Age: <strong>{user.age}</strong>
    </p>
    <p>Gender: {user.sex}</p>
  </div>
);
class ListItems extends React.Component {
  state = {
    select: 'all',
  };

  handleUsersFilter(option) {
    this.setState({
      select: option,
    });
  }

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case 'all':
        return users.map((user) => <Item user={user} key={user.id} />);
      case 'female':
        users = users.filter((user) => user.sex === 'female');
        return users.map((user) => <Item user={user} key={user.id} />);
      case 'male':
        users = users.filter((user) => user.sex === 'male');
        return users.map((user) => <Item user={user} key={user.id} />);
      default:
        return 'error';
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, 'all')}>All</button>
        <button onClick={this.handleUsersFilter.bind(this, 'female')}>
          Female
        </button>
        <button onClick={this.handleUsersFilter.bind(this, 'male')}>
          Male
        </button>
        {this.usersList()}
      </div>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'));
