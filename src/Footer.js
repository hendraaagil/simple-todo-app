import React from 'react';

const Footer = () => {
  return (
    <div>
      <p className="center">
        Show project on{' '}
        <a
          href="https://github.com/hendraaagil/simple-todo-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i> GitHub
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
