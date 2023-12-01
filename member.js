function getSelectedValueAndText(id) {
    var element = document.getElementById(id);
    var value = element.options[element.selectedIndex].value;
    var text = element.options[element.selectedIndex].text;
    return {value, text};
}

function skillsMember() {
    var member = getSelectedValueAndText("member");
    var memberSkills = getSelectedValueAndText("memberSkills");
    var memberSkillsList = getSelectedValueAndText("memberSkillsList");
    var memberSkillsListList = getSelectedValueAndText("memberSkillsListList");
    var memberSkillsListListList = getSelectedValueAndText("memberSkillsListListList");
    var memberSkillsListListListList = getSelectedValueAndText("memberSkillsListListListList");
    var memberSkillsListListListListList = getSelectedValueAndText("memberSkillsListListListListList");
    // ... continue for all dropdown lists
}