import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
  renderDish(dish) {
    if (dish !== null && dish !== undefined) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  renderComments(comments) {
    if (comments !== null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((currentComment) => {
              return (
                <li key={currentComment.id}>
                  <p>{currentComment.comment}</p>
                  <p>
                    --{currentComment.author},{currentComment.date}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish !== null && this.props.dish !== undefined) {
      return (
        <div class="container">
          <div class="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
