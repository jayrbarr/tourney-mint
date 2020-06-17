import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  margin: 5px;
  span {
    font-weight: bold;
  }
`;

const Button = styled.button`
	background-color: darkgreen;
	border-radius: 28px;
	border: 1px solid #18ab29;
	display: inline-block;
	color: white;
	padding: 3px 8px;
	text-decoration: none;
  &:hover {
	background-color: forestgreen;
  }
  &:focus {
    outline: 0;
}
`;

const PlayerEntry = (props) => (
  <form onSubmit={props.handleSubmit}>
  <Label>
    <span>Player/Team  </span>
    <input type="text" placeholder='Enter new player or team' value={props.new} onChange={props.handleNameChange} />
  </Label>
  <Button type="submit" value="Enter">Enter</Button>
</form>
)

export default PlayerEntry;
