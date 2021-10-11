import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import React from 'react';

const ButtonColorDefaultStyle = styled(Button)({
	textTransform: 'none',
	boxShadow: '0px 2px 3px 0px rgb(41 98 255 / 20%)',
	fontSize: 14,
	lineHeight: '20px',
	backgroundColor: '#2962FF',
	color: '#FFFFFF',
	borderRadius: '6px',
	fontWeight: '500',
	fontStyle: 'normal',
	width: '81px',
	height: '36px',
	fontFamily: ['Noto Sans JP'],

	'&:hover': {
		color: '#FFFFFF',
		backgroundColor: '#0039CB',
		boxShadow: '0px 2px 3px 0px rgb(41 98 255 / 20%)',
	},

	'&:focus': {
		boxShadow: '0px 2px 3px 0px rgb(41 98 255 / 20%)',
	},
});

export default function ButtonColorPrimary() {
	return (
		<ButtonColorDefaultStyle disableRipple='true' variant='contained'>
			Default
		</ButtonColorDefaultStyle>
	);
}
