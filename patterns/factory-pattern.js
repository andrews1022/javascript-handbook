// The factory method is a way of creating an interface for creating objects but we can let subclasses define which classes to instantiate
// And factory methods are often used in applications to manage, maintain, and manipulate collections of objects that are different, but at the same time have many common characteristics
// A good example of that would be a member.
// Let's say some kind of paid membership application or web site where your members may have different types but still have the same properties and methods.

// So that's what we're going to do here.
// We're going to create a member factory that takes a member type in creates a new object based on that type

function MemberFactory() {
  this.createMember = function (name, membershipType) {
    let member;

    if (membershipType === 'simple') {
      member = new SimpleMembership(name);
    } else if (membershipType === 'standard') {
      member = new StandardMembership(name);
    } else if (membershipType === 'super') {
      member = new SuperMembership(name);
    }

    member.type = membershipType;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '$5';
};

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$15';
};

const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$25';
};

const members = [];
const factory = new MemberFactory();

// Add members
members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));

// console.log(members);

// Loop through the members
members.forEach((member) => {
  member.define();
});
