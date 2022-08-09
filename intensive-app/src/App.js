import './App.css';
import InputComponent from './components/InputComponent';
import Button from './components/Button';
import TextAreaComponent from './components/TextAreaComponent';
import style from "./components/style.module.css";

function App() {
  const dataInput = {
    name: 'Имя',
    lastName: "Фамилия",
    birthday: 'День рождения',
    phone: 'Телефон',
    site: 'Сайт',
  }
  const dataArea = {
    about: 'О себе',
    stack: 'Стек технологий',
    lastproject: 'Описание последнего проекта'
  }
  return (
    <div className="App">
      <div className={style.container}>
        <h2>Создание анкеты</h2>
        {Object.values(dataInput).map((val, idx) => {
          return <InputComponent key={idx} props={val} />
        })}
        {Object.values(dataArea).map((val, idx) => {
          return <TextAreaComponent key={idx} props={val} />
        })}
        <Button name={'Сохранить'} />
        <Button name={'Отмена'} />
      </div>
    </div>
  );
}

export default App;
