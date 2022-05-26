export default function buttonLockout (id, lockTime, func) {
    document.getElementById(id).disabled = true;
    func();
    setTimeout(() => {
        document.getElementById(id).disabled = false;
    }, lockTime);
}