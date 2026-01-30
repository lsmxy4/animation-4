const paths = document.querySelectorAll('.draw-path');

  paths.forEach(path => {
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();

    path.style.animation = 'drawLine 100s ease forwards';
  });