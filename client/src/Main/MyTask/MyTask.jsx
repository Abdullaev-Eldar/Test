import React from 'react';
import './myTask.css';

function MyTask() {
  return (
    <div className="boxTask">
      <div className="events">
        <h3 className="h">Новые события</h3>
        <div className="line1" />
        <div className="borderBox">
          <div className="boxdesc">
            <div className="desc"><p>Кандидат</p></div>
            <div className="desc"><p>Дата</p></div>
            <div className="desc"><p>Описание</p></div>
          </div>
          <div className="condidateBox">
            <div className="condidate">Cотрудник 1</div>
            <div className="condidate">01.01.2022</div>
            <div className="condidate">Заявка</div>
          </div>
          <div className="condidateBox">
            <div className="condidate">Cотрудник 2</div>
            <div className="condidate">01.01.2022</div>
            <div className="condidate">Старт</div>
          </div>
          <div className="condidateBox">
            <div className="condidate">Cотрудник 3</div>
            <div className="condidate">01.01.2022</div>
            <div className="condidate">Заявка</div>
          </div>
        </div>
      </div>
      <div className="plans">
        <h3 className="h">Заплонированы</h3>
        <div className="line2" />
        <div className="borderBox">
          <div className="boxdesc">
            <div className="desc"><p>Кандидат</p></div>
            <div className="desc"><p>Действие</p></div>
            <div className="desc"><p>Срок</p></div>
          </div>
          <div className="condidateBox">
            <div className="condidate">Cотрудник 1</div>
            <div className="condidate">Предложить работу</div>
            <div className="condidate">11.11.2022</div>
          </div>
          <div className="condidateBox">
            <div className="condidate">Cотрудник 2</div>
            <div className="condidate">Пригласить кандидата</div>
            <div className="condidate">11.11.2022</div>
          </div>
        </div>
      </div>
      <div className="control">
        <h3 className="h">На контроле</h3>
        <div className="line3" />
        <div className="borderBox">
          <div className="boxdesc">
            <div className="desc"><p>Исполнитель</p></div>
            <div className="desc"><p>Кандидат</p></div>
            <div className="desc"><p>Действие</p></div>
          </div>
        </div>
      </div>
      <div className="overdue">
        <h3 className="h">Просрочены</h3>
        <div className="line4" />
        <div className="borderBox">
          <div className="boxdesc">
            <div className="desc"><p>Кандидат</p></div>
            <div className="desc"><p>Действие</p></div>
            <div className="desc"><p>Срок</p></div>
          </div>
          <div className="condidateBox">
            <div className="condidate">Cотрудник 1</div>
            <div className="condidate">Принять на работу</div>
            <div className="condidate">22.02.2022</div>
          </div>
          <div className="condidateBox">
            <div className="condidate">Cотрудник 2</div>
            <div className="condidate">Пригласить кандидата</div>
            <div className="condidate">22.02.2022</div>
          </div>
          <div className="condidateBox">
            <div className="condidate">Cотрудник 3</div>
            <div className="condidate">Провести интервью</div>
            <div className="condidate">05.25.2022</div>
          </div>
          <div className="condidateBox">
            <div className="condidate">Cотрудник 4</div>
            <div className="condidate">Предложить оффер</div>
            <div className="condidate">01.01.2022</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTask;
