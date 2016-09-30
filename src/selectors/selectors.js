export function membersFormattedForDropdown(members) {
    return members.map(member => {
        return {
            value: member.id,
            text: member.firstName + ' ' + member.lastName
        };
    });
}