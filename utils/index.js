const _ = require('lodash');

// WARNING: beware object mutable

function convertFormat({ name, scores }) {
    return _.map(scores, (item, key, index) => {
        return {
            subject: key,
            students: [{ name: name, score: item }]
        };
    });
}

function transformData(store) {
    return _.reduce(store, (acc, subject) => {
        return _.merge({}, acc, _.map(subject.students, (student) => {
            return {
                name: student.name,
                [subject.subject]: student.score
            };
        }));
    }, {});
}

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
    // code here
    const convertedObj = convertFormat({ name, scores });
    const getMatchedSubject = (subject) => { return _.find(convertedObj, ['subject', subject]); };

    const result = _.map(store, ({ subject, students }) => {
        return {
            subject: subject,
            students: _.union([], students, _.get(getMatchedSubject(subject), 'students', [])),
        };
    });

    return result;
};

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
    const getFilteredStudents = (students, name) => {
        return _.filter(students, (s) => { return s.name !== name; });
    };

    const getResult = (store, name, subject) => {
        return _.map(store, (s) => {
            return {
                subject: s.subject,
                students: s.subject === subject ? getFilteredStudents(s.students, name) : s.students
            };
        });

    };

    return getResult(store, name, subject);
};

/**
 * @params {Object} store
 */
exports.transformData = store => {
    return _.map(transformData(store), (o) => o);
};