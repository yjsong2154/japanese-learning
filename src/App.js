import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { hiragana, hiraganaHard } from './data.js';

function App() {
	const [ dict, setDict ] = useState(hiragana);
	const [ ranLetter, setRanLetter ] = useState('あ');
	const [ ans, setAns ] = useState('');
	const [ isCorrect, setIsCorrect ] = useState('');
	const [ ansColor, setAnsColor ] = useState('forestgreen');
	const [ isShow, setIsShow ] = useState(false);

	const nextLetter = () => {
		var letterArr = Object.keys(dict);
		setRanLetter(letterArr[Math.floor(Math.random() * Object.keys(dict).length)]);
	};

	const handleButtonClick = (e) => {
		if (!isShow) {
			if (dict[ranLetter] === ans) {
				setAnsColor('forestgreen');
				setIsCorrect('장답');
			} else {
				setAnsColor('crimson');
				setIsCorrect('오답 : ' + dict[ranLetter]);
			}
			setIsShow(true);
		} else {
			nextLetter();
			setIsShow(false);
			setAns('');
		}
	};

	const handleEnter = (e) => {
		if (e.key === 'Enter') {
			handleButtonClick();
		}
	};

	const handleChange = (e) => {
		setAns(e.target.value);
	};

	return (
		<Background>
			<Title>일본어 연습기</Title>
			<Letter>{ranLetter}</Letter>
			<Correct color={ansColor}>{isShow ? isCorrect : ''}</Correct>
			<InputBox>
				<Input value={ans} onKeyPress={handleEnter} onChange={handleChange} placeholder="답변" />
				<Button onClick={handleButtonClick}>확인</Button>
			</InputBox>
		</Background>
	);
}

const Background = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: start;
`;

const Title = styled.div`
	display: flex;
	height: 20%;
	width: 100%;
	font-size: 20px;
	justify-content: center;
	align-items: center;
`;

const Letter = styled.div`
	display: flex;
	height: 40%;
	width: 100%;
	font-size: 70px;
	justify-content: center;
	align-items: center;
`;

const Correct = styled.div`
	display: flex;
	height: 40px;
	width: 100%;
	font-size: 30px;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.color};
`;

const InputBox = styled.div`
	display: flex;
	flex-direction: row;
	height: 20%;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	display: flex;
	height: 50px;
	width: 70%;
	max-width: 400px;
	padding-left: 10px;
	font-size: 30px;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	display: flex;
	height: 50px;
	width: 20%;
	max-width: 150px;
	font-size: 30px;
	justify-content: center;
	align-items: center;
`;

export default App;
