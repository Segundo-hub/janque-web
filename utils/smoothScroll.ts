export const smoothScroll = function (target: HTMLElement | null, { duration = 500, top = 0 }) {
    if (!target) return;

    let targetPosition = target.getBoundingClientRect().top + top;
    let startPosition = window.scrollY;
    let startTime: any = null;

    const ease = function (t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime: any) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
};
