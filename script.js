/**
 * Created by NinaPC on 05.05.2016.
 */
function sticky_blocks(){
    var A0 = document.querySelector('.container'),
        A1 = A0.querySelectorAll('.bar');
    Array.prototype.slice.call(A1).forEach(function(a, index) {
        var b = null, P = 0;
        window.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
            if (b == null) {
                var Sa = getComputedStyle(a, ''), s = '';
                for (var i = 0; i < Sa.length; i++) {
                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                    }
                }
                b = document.createElement('div');
                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                a.insertBefore(b, a.firstChild);
                var l = a.childNodes.length;
                for (var i = 1; i < l; i++) {
                    b.appendChild(a.childNodes[1]);
                }
            }
            var Ra = a.getBoundingClientRect(), R, Rh = Ra.top + b.getBoundingClientRect().height;
            if (A1[index+1] != undefined) {
                R = Math.round(Rh - A1[index+1].getBoundingClientRect().top + 5);
            } else {
                R = Math.round(Rh - A0.getBoundingClientRect().bottom + parseFloat(getComputedStyle(A0, '').paddingBottom.slice(0, -2)));
            }
            if ((Ra.top - P) <= 0) {
                if ((Ra.top - P) <= R) {
                    b.className = 'stop';
                    b.style.top = - R +'px';
                } else {
                    b.className = 'sticky';
                    b.style.top = P + 'px';
                }
            } else {
                b.className = 'stop';
                b.style.top = '0';
            }
        }
    })
}