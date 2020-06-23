console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
        // when someone clicks on the tab, hide all of the other tab panels
        tabPanels.forEach(tabPanel => (tabPanel.hidden = true));
        // mark all tabButtons as unselected
        tabButtons.forEach(button => button.setAttribute('aria-selected', false));
        // mark the clicked tab as selected
        e.currentTarget.setAttribute('aria-selected', true);
        // find the associated tabPanel and show it!
        const { id } = e.currentTarget;
        // METHOD 2 - Find in the array of tabPanels
        const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
        tabPanel.hidden = false;

        // METHOD 1
        // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
        // tabPanel.hidden = false;
}

// Take our tab panels and listen for each one
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
