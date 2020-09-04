import React from 'react';

const Footer = ({ theme }) => {
  return (
    <div
      className={
        theme
          ? 'footer grey-text text-darken-4'
          : 'footer grey-text text-lighten-5'
      }
    >
      <p className="center">
        Show project on{' '}
        <a
          href="https://github.com/hendraaagil/simple-todo-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </p>
      <p className="center">
        Copyright &copy; 2020.{' '}
        <a
          href="https://github.com/hendraaagil"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hendra Agil
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
