import React from  'react';

export class Profile extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {name : "Turfa Auliarachman", nim : "13515133", major : "Informatics Engineering", university : "Bandung Institute of Technology", foto : "img/pasfoto.jpg"};
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
              <span className="glyphicon glyphicon-gift"></span>April 9, 1997<br />
              <span className="glyphicon glyphicon-envelope"></span><a href="mailto:turfa_auliarachman@rocketmail.com">turfa_auliarachman@rocketmail.com</a><br />
              <span className="glyphicon glyphicon-home"  ></span>Jl. Cisitu Lama V 42B, Dago, Coblong, Bandung<br />
            </p>

            <p>
              My Project Euler username is <code>kingfalcon</code><br />
              <cite>Note : You can find me in other sites using this username</cite>
            </p>

            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Social</button>
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span className="caret"></span><span className="sr-only">Social</span></button>

              <ul className="dropdown-menu" role="menu">
                <li><a href="https://www.facebook.com/turfa.auliarachman" target="_blank">Facebook</a></li>
                <li><a href="https://plus.google.com/+TurfaAuliarachman" target="_blank">Google+</a></li>
                <li><a href="https://twitter.com/TurfaGreenbat" target="_blank">Twitter</a></li>
              </ul>
            </div>

            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Informatics</button>
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span className="caret"></span><span className="sr-only">Computer Science Things</span></button>

              <ul className="dropdown-menu" role="menu">
                <li><a href="https://www.github.com/turfaa" target="_blank">Github</a></li>
                <li><a href="http://codeforces.com/profile/NangisDarah" target="_blank">Codeforces</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
