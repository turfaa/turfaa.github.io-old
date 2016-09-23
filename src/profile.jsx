import React from  'react';

export class Profile extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {name : "Turfa Auliarachman", nim : "13515133", major : "Informatics Engineering", university : "Bandung Institute of Technology", foto : "img/pasfoto.jpg", birthdate : "April 9, 1997", email : "turfa_auliarachman@rocketmail.com", projecteuler : "kingfalcon", alamat : "Jl. Cisitu Lama V 42B, Dago, Coblong, Bandung", facebook : "turfa.auliarachman", gplus : "TurfaAuliarachman", twitter : "TurfaGreenbat", github : "turfaa", codeforces : "NangisDarah"};
  }

  render() {
    return (
      <div style={{'marginBottom' : '10px'}}>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <h3><img src={this.state.foto} style={{'width' : '100%'}}/></h3>
          </div>
          <div className="col-xs-12 col-sm-8">
            <h3>{this.state.name}</h3>
            <h4>{this.state.major} | <small>{this.state.university}</small></h4>

            <p>
              <span className="glyphicon glyphicon-gift"></span>{this.state.birthdate}<br />
              <span className="glyphicon glyphicon-envelope"></span><a href="mailto:{this.state.email}">{this.state.email}</a><br />
              <span className="glyphicon glyphicon-home"  ></span>{this.state.alamat}<br />
            </p>

            <p>
              My Project Euler username is <code>{this.state.projecteuler}</code><br />
              <cite>Note : You can find me in other sites using this username</cite>
            </p>

            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Social</button>
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span className="caret"></span><span className="sr-only">Social</span></button>

              <ul className="dropdown-menu" role="menu">
                <li><a href="https://www.facebook.com/{this.state.facebook}" target="_blank">Facebook</a></li>
                <li><a href="https://plus.google.com/+{this.state.gplus}" target="_blank">Google+</a></li>
                <li><a href="https://twitter.com/{this.state.twitter}" target="_blank">Twitter</a></li>
              </ul>
            </div>

            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Informatics</button>
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span className="caret"></span><span className="sr-only">Computer Science Things</span></button>

              <ul className="dropdown-menu" role="menu">
                <li><a href="https://www.github.com/{this.state.github}" target="_blank">Github</a></li>
                <li><a href="http://codeforces.com/profile/{this.state.codeforces}" target="_blank">Codeforces</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
