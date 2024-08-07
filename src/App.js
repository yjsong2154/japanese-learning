// 배포 npm run deploy

import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import data from './data.js';

function App() {
	const [ OriginalDict, setOriginalDict ] = useState(data['hiragana'][1]);
	const [ dict, setDict ] = useState(data['hiragana'][1]);
	const [ ranLetter, setRanLetter ] = useState('あ');
	const [ ans, setAns ] = useState('');
	const [ isCorrect, setIsCorrect ] = useState('');
	const [ ansColor, setAnsColor ] = useState('forestgreen');
	const [ isShow, setIsShow ] = useState(false);
	const [ firstDropdown, setFirstDropdown ] = useState('hiragana');
	const [ secondDropdown, setSecondDropdown ] = useState(1);
	const [ lastDay, setLastDay ] = useState(localStorage.getItem('lastDay') || '없음');

	useEffect(
		() => {
			nextLetter();
		},
		[ OriginalDict ]
	);

	useEffect(
		() => {
			localStorage.setItem('lastDay', lastDay);
		},
		[ lastDay ]
	);

	const handleFirstChange = (event) => {
		setFirstDropdown(event.target.value);
	};

	const handleSecondChange = (event) => {
		setSecondDropdown(event.target.value);
	};

	const nextLetter = () => {
		var letterArr = Object.keys(dict);
		if (letterArr.length === 0) {
			if (firstDropdown !== 'hiragana' && firstDropdown !== 'katakana') {
				const first = firstDropdown.slice(0, 2);
				if (secondDropdown > 30) {
					const stackDay = secondDropdown - 30;
					setLastDay(first + ' ' + stackDay + '일차');
				} else {
					setLastDay(first + ' ' + secondDropdown + '일차');
				}
			}
			setRanLetter('끝');
		} else {
			setRanLetter(letterArr[Math.floor(Math.random() * Object.keys(dict).length)]);
		}
	};

	const handleButtonClick = (e) => {
		if (!isShow) {
			if (dict[ranLetter][0].includes(ans.split(' ').join(''))) {
				setAnsColor('forestgreen');
				setIsCorrect('정답');
				delCorrect();
			} else {
				if (Object.keys(dict).length === 0) {
					setAnsColor('forestgreen');
					setIsCorrect('확인을 눌러주세요');
					setDict(OriginalDict);
				} else {
					setAnsColor('crimson');
					if (dict[ranLetter][1]) {
						setIsCorrect('오답 : ' + dict[ranLetter][1]);
					} else {
						setIsCorrect('오답 : ' + dict[ranLetter][0][0]);
					}
				}
			}
			setIsShow(true);
		} else {
			nextLetter();
			setIsShow(false);
			setAns('');
		}
	};

	const delCorrect = () => {
		const tempDict = { ...dict };
		delete tempDict[ranLetter];
		setDict(tempDict);
	};

	const handleDict = (e) => {
		if (firstDropdown !== 'hiragana' && firstDropdown !== 'katakana' && secondDropdown === "Re"){
			setOriginalDict(data[firstDropdown]["Re"]);
			setDict(data[firstDropdown]["Re"]);
		}
		else if (firstDropdown !== 'hiragana' && firstDropdown !== 'katakana' && secondDropdown < 31) {
			setOriginalDict(data[firstDropdown][secondDropdown]);
			setDict(data[firstDropdown][secondDropdown]);
		} else if (firstDropdown !== 'hiragana' && firstDropdown !== 'katakana' && secondDropdown > 30) {
			let combined = {};
			for (let i = 1; i <= secondDropdown - 30; i++) {
				if (data[firstDropdown][i]) {
					combined = { ...combined, ...data[firstDropdown][i] };
				}
			}
			setOriginalDict(combined);
			setDict(combined);
		} else if (secondDropdown < 31) {
			setOriginalDict(data[firstDropdown][1]);
			setDict(data[firstDropdown][1]);
		} else {
			setOriginalDict(data[firstDropdown][2]);
			setDict(data[firstDropdown][2]);
		}
		setIsShow(false);
		setAns('');
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
			<Title>일본어 단어장</Title>
			<Title>진도 : {lastDay} </Title>

			<SelectBox>
				<select
					value={firstDropdown}
					onChange={handleFirstChange}
					style={{
						marginRight: '10px',
						fontSize: '20px',
						background: '#111',
						color: '#f7f7f7',
						height: '40px',
						width: '150px'
					}}
				>
					<option value="hiragana">히라가나</option>
					<option value="katakana">가타가나</option>
					<option value="N1_mean">N1 의미</option>
					<option value="N1_pron">N1 발음</option>
					<option value="N2_mean">N2 의미</option>
					<option value="N2_pron">N2 발음</option>
					<option value="N3_mean">N3 의미</option>
					<option value="N3_pron">N3 발음</option>
					<option value="N4_mean">N4 의미</option>
					<option value="N4_pron">N4 발음</option>
					<option value="N5_mean">N5 의미</option>
					<option value="N5_pron">N5 발음</option>
				</select>

				<select
					value={secondDropdown}
					onChange={handleSecondChange}
					style={{
						marginRight: '10px',
						fontSize: '20px',
						background: '#111',
						color: '#f7f7f7',
						height: '40px',
						width: '150px'
					}}
				>
					{Array.from({ length: 30 }, (_, i) => (
						<option key={i + 1} value={i + 1}>
							{i + 1} 일차
						</option>
					))}
					{Array.from({ length: 30 }, (_, i) => (
						<option key={i + 31} value={i + 31}>
							{i + 1} 일차 누적
						</option>
					))}

					<option value="Re">복습</option>
				</select>

				<button
					onClick={handleDict}
					style={{ fontSize: '20px', background: '#111', color: '#f7f7f7', height: '40px', width: '70px' }}
				>
					선택
				</button>
			</SelectBox>

			<Title>{Object.keys(dict).length}개 남음</Title>
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
	width: 100%;
	justify-content: center;
`;

const Title = styled.div`
	display: flex;
	height: 30px;
	width: 100%;
	font-size: 20px;
	justify-content: center;
	align-items: center;
	margin-bottom: auto;
	margin-top: 10px;
`;

const SelectBox = styled.div`
	display: flex;
	flex-direction: row;
	height: 60px;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const Letter = styled.div`
	display: flex;
	height: 160px;
	width: 100%;
	font-size: 70px;
	justify-content: center;
	align-items: center;
`;

const Correct = styled.div`
	display: flex;
	height: 100px;
	width: 100%;
	font-size: 30px;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.color};
`;

const InputBox = styled.div`
	display: flex;
	flex-direction: row;
	height: 60px;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin-bottom: auto;
`;

const Input = styled.input`
	display: flex;
	height: 50px;
	width: 60%;
	max-width: 400px;
	padding-left: 10px;
	font-size: 30px;
	justify-content: center;
	align-items: center;
	background-color: #111;
	color: #f7f7f7;
`;

const Button = styled.button`
	display: flex;
	height: 50px;
	width: 20%;
	max-width: 150px;
	min-width: 100px;
	font-size: 25px;
	justify-content: center;
	align-items: center;
	background-color: #111;
	color: #f7f7f7;
`;

export default App;
