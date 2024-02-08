document.addEventListener('DOMContentLoaded', function () {
    // Ball Animation
    const ball = document.createElement('div');
    ball.classList.add('ball');
    document.body.appendChild(ball);

    // Set initial position and speed
    let ballX = Math.random() * (window.innerWidth - 50);
    let ballY = Math.random() * (window.innerHeight - 50);

    let minSpeed = 5; // Replace with your desired minimum speed
    let maxSpeed = 10; // Replace with your desired maximum speed
    
    let speedX = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
    let speedY = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
    

    function updateBall() {
        // Update position
        ballX += speedX;
        ballY += speedY;

        // Bounce off the screen walls
        if (ballX <= 0 || ballX >= window.innerWidth - 50) {
            speedX = -speedX;
        }

        if (ballY <= 0 || ballY >= window.innerHeight - 50) {
            speedY = -speedY;
        }

        // Update ball position
        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';

        requestAnimationFrame(updateBall);
    }

    // Start the animation
    updateBall();
});
