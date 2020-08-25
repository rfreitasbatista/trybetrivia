import React from 'react';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import GameHeader from '../../components/GameHeader';
import gif1 from '../../assets/images/gif1.gif';
import gif2 from '../../assets/images/gif2.gif';
import Footer from '../../components/footer/Footer.js';
import sound from './levelComplete.mp3';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assertions: 0,
      score: 0,
    };
    this.starter = this.starter.bind(this);
  }

  componentDidMount() {
    this.starter();
  }

  starter() {
    const data = JSON.parse(localStorage.getItem('state'));
    this.setState({
      assertions: data.player.assertions,
      score: data.player.score,
    });
  }

  render() {
    const { assertions, score } = this.state;
    return (
      <div>
      <ReactAudioPlayer autoPlay src={sound} volume={0.9} />
      <GameHeader />
        <div className='feedbackP'>
        <div>
        {assertions < 3 ? (
          <div data-testid="feedback-text">
            <img src={gif2} width='50px' height='50px'/>Podia ser melhor...</div>
        ) : (
          <div data-testid="feedback-text">
            <img src={gif1} width='50px' height='50px' />Mandou bem!</div>
        )}
        <div>
          Right Answer: <span data-testid="feedback-total-question">{assertions}</span>{' '}
        </div>
        <div>
          Total Score: <span data-testid="feedback-total-score">{score}</span>
        </div>
        <Link to="/">
          <button type="button" data-testid="btn-play-again">
            Jogar Novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button type="button" data-testid="btn-ranking">
            Ranking
          </button>
        </Link>
      </div>
    </div>
    <Footer />
    </div>
    );
  }
}

export default Feedback;
