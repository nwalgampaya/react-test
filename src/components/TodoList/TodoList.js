import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoList extends React.Component {
    _handleDelete(id){
        this.props._handleDelete(id);
    }

    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}<button onClick={this._handleDelete.bind(this, item.id)}>Delete</button></li>
                ))}
            </ul>
        );
    }
  }

//   $(this).before('<div class="containerDyna' + countAdd + '"' +
//   'style=" font-size: xx-small; font-family: Arial;" title=' + relType + '>' +
//   '<div class="headerDyna" ><span>-' + relativeAdd + " " + countAdd + '</span></div>' +
//   '<div class="contentDyna" style="display: block">' +
//   '<div class="Table">' +
//   '<div class="Row">' +
//   '<div class="Cell">Affected</div>' +
//   '<div class="Cell">Cancer Type</div>' +
//   '<div class="Cell">Age of Diagnosis</div>' +
//   '</div>' +
//   '<div class="Row" >' +
//   '<div class="Cell"><input type="checkbox" style=" font-size: xx-small; font-family: Arial;width:10px;height:10px;" name="lineupDyna"/></div>' +
//   '<div class="Cell" style=" font-size: xx-small; font-family: Arial;">Colorectal</div>' +
//   '<div class="Cell"><input type="text" style=" font-size: xx-small; font-family: Arial;width:15px;height:10px;"/></div>' +
//   '</div>' + dynamicRows +
//   '<div class="Row">' +
//   '<div class="Empty Cell"></div>' +
//   '<div class="Empty Cell"></div>' +
//   '<div class="Cell">' +
//   '<span style="cursor:n-resize;"; class="remove"><img src="icon/remove.png" title="Remove"></span>' +
//   '</div>' +//End Cell
//   '</div>' +//End Row
//   '</div>' +//End Table
//   '</div>' +//End Content
//   '</div>');//End container
//   /*'<span class="add">add </span><span class="remove"> remove</span></div>');*/
// });