import x, {compose, partial} from 'kit-utils';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';

export const page_data = (data) => (obj) => {
    return {
        ...obj,
        total       : data.total,
        page        : data.page,
        page_size   : data.pagesize,
        page_total  : Math.ceil(data.total / data.pagesize)
    };
}

export const second2date = (x) => new Date(x * 1000);

export const format_date = partial((show_time, d) => {
    let str = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-');

    if (show_time) {
        str += ' ' + [d.getHours(), d.getMinutes()].join(':');
    }

    return str;
});

export const date_str = (time, show_time) => {
    return compose(format_date(show_time), second2date)(time);
}

export const format_queries = (queries) => {
    let result = []

    for (var key in queries) {
        if (queries.hasOwnProperty(key)) {
            result.push(key + '=' + encodeURIComponent(queries[key]));
        }
    }

    return result.join('&');
}

export const json2formdata = (json) => {
    let helper = (key, value) => {
        if (isObject(value)) {
            return Object.keys(value).map(k => helper(key + '[' + k + ']', value[k])).join('&');
        }

        if (isArray(value)) {
            return value.map((sub, i) => helper(key + '[' + i + ']', sub)).join('&');
        }

        if (value === undefined) {
            return key + '=';
        }

        return key + '=' + encodeURIComponent(value.toString());
    };

    let result = Object.keys(json).map(key => helper(key, json[key]));

    return result.join('&');
}

export const encode_html = (text) => {
    return x.reduce((prev, cur) => {
        return prev.replace(cur[0], cur[1]);
    }, text, [
        // [/"/g, '&quot;'],
        // [/'/g, '&apos;'],
        [/</g, '&lt;'],
        [/>/g, '&gt;'],
        // [/&/g, '&amp;']
    ]);
};
