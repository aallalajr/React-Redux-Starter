import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const orgs = [
  {
    id: "misso",
    title: "MISSO",
    url: "www.misso.org",
    memberId: "john-doe",
    category: "Student Org"
  },
  {
    id: "cougar-cs",
    title: "Cougar CS",
    url: "www.cougarcs.com",
    memberId: "jane-doe",
    category: "Student Org"
  },
  {
    id: "hbsa",
    title: "Hipanic Business Student Assocation",
    url: "www.hbsabauer.org",
    memberId: "john-smith",
    category: "Student Org"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (org) => {
  return replaceAll(org.title, ' ', '-');
};

class OrgApi {
  static getAllOrgs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], orgs));
      }, delay);
    });
  }

  static saveOrg(org) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minOrgTitleLength = 1;
        if (org.title.length < minOrgTitleLength) {
          reject(`Title must be at least ${minOrgTitleLength} characters.`);
        }

        if (org.id) {
          const existingOrgIndex = orgs.findIndex(a => a.id == org.id);
          orgs.splice(existingOrgIndex, 1, org);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new orgs in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          org.id = generateId(org);
          orgs.push(org);
        }

        resolve(Object.assign({}, org));
      }, delay);
    });
  }

  static deleteOrg(orgId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfOrgToDelete = orgs.findIndex(org => {
          org.orgId == orgId;
        });
        orgs.splice(indexOfOrgToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default OrgApi;