import React from  'react';

export class Profile extends React.Component{

  constructor(props, context){
    super(props, context);
  };

  render() {
    return (
      <div style={{'marginBottom' : '10px'}}>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <h3><img src={this.props.profileData.foto} style={{'width' : '100%'}}/></h3>
          </div>
          <div className="col-xs-12 col-sm-8">
            <h3>{this.props.profileData.name}</h3>
            <h4>{this.props.profileData.major} | <small>{this.props.profileData.university}</small></h4>

            <p>
              <span className="glyphicon glyphicon-gift"></span>{this.props.profileData.birthdate}<br />
              <span className="glyphicon glyphicon-envelope"></span><a href={"mailto:"+this.props.profileData.email}>{this.props.profileData.email}</a><br />
              <span className="glyphicon glyphicon-home"  ></span>{this.props.profileData.alamat}<br />
            </p>

            <p>
              My Project Euler username is <code>{this.props.profileData.projecteuler}</code><br />
              <cite>Note : You can find me in other sites using this username</cite>
            </p>

            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Social</button>
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span className="caret"></span><span className="sr-only">Social</span></button>

              <ul className="dropdown-menu" role="menu">
                <li><a href={this.props.profileData.facebook} target="_blank">Facebook</a></li>
                <li><a href={this.props.profileData.gplus} target="_blank">Google+</a></li>
                <li><a href={this.props.profileData.twitter} target="_blank">Twitter</a></li>
              </ul>
            </div>

            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Informatics</button>
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span className="caret"></span><span className="sr-only">Computer Science Things</span></button>

              <ul className="dropdown-menu" role="menu">
                <li><a href={this.props.profileData.github} target="_blank">Github</a></li>
                <li><a href={this.props.profileData.codeforces} target="_blank">Codeforces</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
