const checkbox = document.querySelector('input[name=enabled]');
checkbox.addEventListener('change', (e) => {
    const value = e.currentTarget.checked;
    document.getElementById("text").text = value

    chrome.storage.sync.set({checkbox: value});
});

async function fetchData() {
    let {enabled} = await chrome.storage.sync.get(['checkbox']);

    checkbox.checked = enabled;
}

window.onload = () => {
    fetchData();
}