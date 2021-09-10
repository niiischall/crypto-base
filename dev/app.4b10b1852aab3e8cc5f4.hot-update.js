webpackHotUpdate("app",{

/***/ "./node_modules/@sideway/address/lib/decode.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sideway/address/lib/decode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Adapted from:
// Copyright (c) 2017-2019 Justin Ridgewell, MIT Licensed, https://github.com/jridgewell/safe-decode-string-component
// Copyright (c) 2008-2009 Bjoern Hoehrmann <bjoern@hoehrmann.de>, MIT Licensed, http://bjoern.hoehrmann.de/utf-8/decoder/dfa/

const internals = {};

exports.decode = function (string) {
  let percentPos = string.indexOf('%');

  if (percentPos === -1) {
    return string;
  }

  let decoded = '';
  let last = 0;
  let codepoint = 0;
  let startOfOctets = percentPos;
  let state = internals.utf8.accept;

  while (percentPos > -1 && percentPos < string.length) {
    const high = internals.resolveHex(string[percentPos + 1], 4);
    const low = internals.resolveHex(string[percentPos + 2], 0);
    const byte = high | low;
    const type = internals.utf8.data[byte];
    state = internals.utf8.data[256 + state + type];
    codepoint = codepoint << 6 | byte & internals.utf8.data[364 + type];

    if (state === internals.utf8.accept) {
      decoded += string.slice(last, startOfOctets);
      decoded += codepoint <= 0xFFFF ? String.fromCharCode(codepoint) : String.fromCharCode(0xD7C0 + (codepoint >> 10), 0xDC00 + (codepoint & 0x3FF));
      codepoint = 0;
      last = percentPos + 3;
      percentPos = string.indexOf('%', last);
      startOfOctets = percentPos;
      continue;
    }

    if (state === internals.utf8.reject) {
      return null;
    }

    percentPos += 3;

    if (percentPos >= string.length || string[percentPos] !== '%') {
      return null;
    }
  }

  return decoded + string.slice(last);
};

internals.resolveHex = function (char, shift) {
  const i = internals.hex[char];
  return i === undefined ? 255 : i << shift;
};

internals.hex = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'a': 10,
  'A': 10,
  'b': 11,
  'B': 11,
  'c': 12,
  'C': 12,
  'd': 13,
  'D': 13,
  'e': 14,
  'E': 14,
  'f': 15,
  'F': 15
};
internals.utf8 = {
  accept: 12,
  reject: 0,
  data: [// Maps bytes to character to a transition
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, // Maps a state to a new state when adding a transition
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // Maps the current transition to a mask that needs to apply to the byte
  0x7F, 0x3F, 0x3F, 0x3F, 0x00, 0x1F, 0x0F, 0x0F, 0x0F, 0x07, 0x07, 0x07]
};

/***/ }),

/***/ "./node_modules/@sideway/address/lib/domain.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sideway/address/lib/domain.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

const Errors = __webpack_require__(/*! ./errors */ "./node_modules/@sideway/address/lib/errors.js");

const internals = {
  minDomainSegments: 2,
  nonAsciiRx: /[^\x00-\x7f]/,
  domainControlRx: /[\x00-\x20@\:\/\\#!\$&\'\(\)\*\+,;=\?]/,
  // Control + space + separators
  tldSegmentRx: /^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,
  domainSegmentRx: /^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,
  URL: Url.URL || URL // $lab:coverage:ignore$

};

exports.analyze = function (domain, options = {}) {
  if (typeof domain !== 'string') {
    throw new Error('Invalid input: domain must be a string');
  }

  if (!domain) {
    return Errors.code('DOMAIN_NON_EMPTY_STRING');
  }

  if (domain.length > 256) {
    return Errors.code('DOMAIN_TOO_LONG');
  }

  const ascii = !internals.nonAsciiRx.test(domain);

  if (!ascii) {
    if (options.allowUnicode === false) {
      // Defaults to true
      return Errors.code('DOMAIN_INVALID_UNICODE_CHARS');
    }

    domain = domain.normalize('NFC');
  }

  if (internals.domainControlRx.test(domain)) {
    return Errors.code('DOMAIN_INVALID_CHARS');
  }

  domain = internals.punycode(domain); // https://tools.ietf.org/html/rfc1035 section 2.3.1

  const minDomainSegments = options.minDomainSegments || internals.minDomainSegments;
  const segments = domain.split('.');

  if (segments.length < minDomainSegments) {
    return Errors.code('DOMAIN_SEGMENTS_COUNT');
  }

  if (options.maxDomainSegments) {
    if (segments.length > options.maxDomainSegments) {
      return Errors.code('DOMAIN_SEGMENTS_COUNT_MAX');
    }
  }

  const tlds = options.tlds;

  if (tlds) {
    const tld = segments[segments.length - 1].toLowerCase();

    if (tlds.deny && tlds.deny.has(tld) || tlds.allow && !tlds.allow.has(tld)) {
      return Errors.code('DOMAIN_FORBIDDEN_TLDS');
    }
  }

  for (let i = 0; i < segments.length; ++i) {
    const segment = segments[i];

    if (!segment.length) {
      return Errors.code('DOMAIN_EMPTY_SEGMENT');
    }

    if (segment.length > 63) {
      return Errors.code('DOMAIN_LONG_SEGMENT');
    }

    if (i < segments.length - 1) {
      if (!internals.domainSegmentRx.test(segment)) {
        return Errors.code('DOMAIN_INVALID_CHARS');
      }
    } else {
      if (!internals.tldSegmentRx.test(segment)) {
        return Errors.code('DOMAIN_INVALID_TLDS_CHARS');
      }
    }
  }

  return null;
};

exports.isValid = function (domain, options) {
  return !exports.analyze(domain, options);
};

internals.punycode = function (domain) {
  try {
    return new internals.URL(`http://${domain}`).host;
  } catch (err) {
    return domain;
  }
};

/***/ }),

/***/ "./node_modules/@sideway/address/lib/email.js":
/*!****************************************************!*\
  !*** ./node_modules/@sideway/address/lib/email.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

const Domain = __webpack_require__(/*! ./domain */ "./node_modules/@sideway/address/lib/domain.js");

const Errors = __webpack_require__(/*! ./errors */ "./node_modules/@sideway/address/lib/errors.js");

const internals = {
  nonAsciiRx: /[^\x00-\x7f]/,
  encoder: new (Util.TextEncoder || TextEncoder)() // $lab:coverage:ignore$

};

exports.analyze = function (email, options) {
  return internals.email(email, options);
};

exports.isValid = function (email, options) {
  return !internals.email(email, options);
};

internals.email = function (email, options = {}) {
  if (typeof email !== 'string') {
    throw new Error('Invalid input: email must be a string');
  }

  if (!email) {
    return Errors.code('EMPTY_STRING');
  } // Unicode


  const ascii = !internals.nonAsciiRx.test(email);

  if (!ascii) {
    if (options.allowUnicode === false) {
      // Defaults to true
      return Errors.code('FORBIDDEN_UNICODE');
    }

    email = email.normalize('NFC');
  } // Basic structure


  const parts = email.split('@');

  if (parts.length !== 2) {
    return parts.length > 2 ? Errors.code('MULTIPLE_AT_CHAR') : Errors.code('MISSING_AT_CHAR');
  }

  const [local, domain] = parts;

  if (!local) {
    return Errors.code('EMPTY_LOCAL');
  }

  if (!options.ignoreLength) {
    if (email.length > 254) {
      // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.3
      return Errors.code('ADDRESS_TOO_LONG');
    }

    if (internals.encoder.encode(local).length > 64) {
      // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.1
      return Errors.code('LOCAL_TOO_LONG');
    }
  } // Validate parts


  return internals.local(local, ascii) || Domain.analyze(domain, options);
};

internals.local = function (local, ascii) {
  const segments = local.split('.');

  for (const segment of segments) {
    if (!segment.length) {
      return Errors.code('EMPTY_LOCAL_SEGMENT');
    }

    if (ascii) {
      if (!internals.atextRx.test(segment)) {
        return Errors.code('INVALID_LOCAL_CHARS');
      }

      continue;
    }

    for (const char of segment) {
      if (internals.atextRx.test(char)) {
        continue;
      }

      const binary = internals.binary(char);

      if (!internals.atomRx.test(binary)) {
        return Errors.code('INVALID_LOCAL_CHARS');
      }
    }
  }
};

internals.binary = function (char) {
  return Array.from(internals.encoder.encode(char)).map(v => String.fromCharCode(v)).join('');
};
/*
    From RFC 5321:

        Mailbox         =   Local-part "@" ( Domain / address-literal )

        Local-part      =   Dot-string / Quoted-string
        Dot-string      =   Atom *("."  Atom)
        Atom            =   1*atext
        atext           =   ALPHA / DIGIT / "!" / "#" / "$" / "%" / "&" / "'" / "*" / "+" / "-" / "/" / "=" / "?" / "^" / "_" / "`" / "{" / "|" / "}" / "~"

        Domain          =   sub-domain *("." sub-domain)
        sub-domain      =   Let-dig [Ldh-str]
        Let-dig         =   ALPHA / DIGIT
        Ldh-str         =   *( ALPHA / DIGIT / "-" ) Let-dig

        ALPHA           =   %x41-5A / %x61-7A        ; a-z, A-Z
        DIGIT           =   %x30-39                  ; 0-9

    From RFC 6531:

        sub-domain      =/  U-label
        atext           =/  UTF8-non-ascii

        UTF8-non-ascii  =   UTF8-2 / UTF8-3 / UTF8-4

        UTF8-2          =   %xC2-DF UTF8-tail
        UTF8-3          =   %xE0 %xA0-BF UTF8-tail /
                            %xE1-EC 2( UTF8-tail ) /
                            %xED %x80-9F UTF8-tail /
                            %xEE-EF 2( UTF8-tail )
        UTF8-4          =   %xF0 %x90-BF 2( UTF8-tail ) /
                            %xF1-F3 3( UTF8-tail ) /
                            %xF4 %x80-8F 2( UTF8-tail )

        UTF8-tail       =   %x80-BF

    Note: The following are not supported:

        RFC 5321: address-literal, Quoted-string
        RFC 5322: obs-*, CFWS
*/


internals.atextRx = /^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/; // _ included in \w

internals.atomRx = new RegExp([//  %xC2-DF UTF8-tail
'(?:[\\xc2-\\xdf][\\x80-\\xbf])', //  %xE0 %xA0-BF UTF8-tail              %xE1-EC 2( UTF8-tail )            %xED %x80-9F UTF8-tail              %xEE-EF 2( UTF8-tail )
'(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})', //  %xF0 %x90-BF 2( UTF8-tail )            %xF1-F3 3( UTF8-tail )            %xF4 %x80-8F 2( UTF8-tail )
'(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})'].join('|'));

/***/ }),

/***/ "./node_modules/@sideway/address/lib/errors.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sideway/address/lib/errors.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.codes = {
  EMPTY_STRING: 'Address must be a non-empty string',
  FORBIDDEN_UNICODE: 'Address contains forbidden Unicode characters',
  MULTIPLE_AT_CHAR: 'Address cannot contain more than one @ character',
  MISSING_AT_CHAR: 'Address must contain one @ character',
  EMPTY_LOCAL: 'Address local part cannot be empty',
  ADDRESS_TOO_LONG: 'Address too long',
  LOCAL_TOO_LONG: 'Address local part too long',
  EMPTY_LOCAL_SEGMENT: 'Address local part contains empty dot-separated segment',
  INVALID_LOCAL_CHARS: 'Address local part contains invalid character',
  DOMAIN_NON_EMPTY_STRING: 'Domain must be a non-empty string',
  DOMAIN_TOO_LONG: 'Domain too long',
  DOMAIN_INVALID_UNICODE_CHARS: 'Domain contains forbidden Unicode characters',
  DOMAIN_INVALID_CHARS: 'Domain contains invalid character',
  DOMAIN_INVALID_TLDS_CHARS: 'Domain contains invalid tld character',
  DOMAIN_SEGMENTS_COUNT: 'Domain lacks the minimum required number of segments',
  DOMAIN_SEGMENTS_COUNT_MAX: 'Domain contains too many segments',
  DOMAIN_FORBIDDEN_TLDS: 'Domain uses forbidden TLD',
  DOMAIN_EMPTY_SEGMENT: 'Domain contains empty dot-separated segment',
  DOMAIN_LONG_SEGMENT: 'Domain contains dot-separated segment that is too long'
};

exports.code = function (code) {
  return {
    code,
    error: exports.codes[code]
  };
};

/***/ }),

/***/ "./node_modules/@sideway/address/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@sideway/address/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Decode = __webpack_require__(/*! ./decode */ "./node_modules/@sideway/address/lib/decode.js");

const Domain = __webpack_require__(/*! ./domain */ "./node_modules/@sideway/address/lib/domain.js");

const Email = __webpack_require__(/*! ./email */ "./node_modules/@sideway/address/lib/email.js");

const Errors = __webpack_require__(/*! ./errors */ "./node_modules/@sideway/address/lib/errors.js");

const Ip = __webpack_require__(/*! ./ip */ "./node_modules/@sideway/address/lib/ip.js");

const Tlds = __webpack_require__(/*! ./tlds */ "./node_modules/@sideway/address/lib/tlds.js");

const Uri = __webpack_require__(/*! ./uri */ "./node_modules/@sideway/address/lib/uri.js");

const internals = {
  defaultTlds: {
    allow: Tlds,
    deny: null
  }
};
module.exports = {
  errors: Errors.codes,
  domain: {
    analyze(domain, options) {
      options = internals.options(options);
      return Domain.analyze(domain, options);
    },

    isValid(domain, options) {
      options = internals.options(options);
      return Domain.isValid(domain, options);
    }

  },
  email: {
    analyze(email, options) {
      options = internals.options(options);
      return Email.analyze(email, options);
    },

    isValid(email, options) {
      options = internals.options(options);
      return Email.isValid(email, options);
    }

  },
  ip: {
    regex: Ip.regex
  },
  uri: {
    decode: Decode.decode,
    regex: Uri.regex
  }
};

internals.options = function (options) {
  if (!options) {
    return {
      tlds: internals.defaultTlds
    };
  }

  if (options.tlds === false) {
    // Defaults to true
    return options;
  }

  if (!options.tlds || options.tlds === true) {
    return Object.assign({}, options, {
      tlds: internals.defaultTlds
    });
  }

  if (typeof options.tlds !== 'object') {
    throw new Error('Invalid options: tlds must be a boolean or an object');
  }

  if (options.tlds.deny) {
    if (options.tlds.deny instanceof Set === false) {
      throw new Error('Invalid options: tlds.deny must be a Set object');
    }

    if (options.tlds.allow) {
      throw new Error('Invalid options: cannot specify both tlds.allow and tlds.deny lists');
    }

    return options;
  }

  if (options.tlds.allow === true) {
    return Object.assign({}, options, {
      tlds: internals.defaultTlds
    });
  }

  if (options.tlds.allow instanceof Set === false) {
    throw new Error('Invalid options: tlds.allow must be a Set object or true');
  }

  return options;
};

/***/ }),

/***/ "./node_modules/@sideway/address/lib/ip.js":
/*!*************************************************!*\
  !*** ./node_modules/@sideway/address/lib/ip.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Assert = __webpack_require__(/*! @hapi/hoek/lib/assert */ "./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/assert.js");

const Uri = __webpack_require__(/*! ./uri */ "./node_modules/@sideway/address/lib/uri.js");

const internals = {};

exports.regex = function (options = {}) {
  // CIDR
  Assert(options.cidr === undefined || typeof options.cidr === 'string', 'options.cidr must be a string');
  const cidr = options.cidr ? options.cidr.toLowerCase() : 'optional';
  Assert(['required', 'optional', 'forbidden'].includes(cidr), 'options.cidr must be one of required, optional, forbidden'); // Versions

  Assert(options.version === undefined || typeof options.version === 'string' || Array.isArray(options.version), 'options.version must be a string or an array of string');
  let versions = options.version || ['ipv4', 'ipv6', 'ipvfuture'];

  if (!Array.isArray(versions)) {
    versions = [versions];
  }

  Assert(versions.length >= 1, 'options.version must have at least 1 version specified');

  for (let i = 0; i < versions.length; ++i) {
    Assert(typeof versions[i] === 'string', 'options.version must only contain strings');
    versions[i] = versions[i].toLowerCase();
    Assert(['ipv4', 'ipv6', 'ipvfuture'].includes(versions[i]), 'options.version contains unknown version ' + versions[i] + ' - must be one of ipv4, ipv6, ipvfuture');
  }

  versions = Array.from(new Set(versions)); // Regex

  const parts = versions.map(version => {
    // Forbidden
    if (cidr === 'forbidden') {
      return Uri.ip[version];
    } // Required


    const cidrpart = `\\/${version === 'ipv4' ? Uri.ip.v4Cidr : Uri.ip.v6Cidr}`;

    if (cidr === 'required') {
      return `${Uri.ip[version]}${cidrpart}`;
    } // Optional


    return `${Uri.ip[version]}(?:${cidrpart})?`;
  });
  const raw = `(?:${parts.join('|')})`;
  const regex = new RegExp(`^${raw}$`);
  return {
    cidr,
    versions,
    regex,
    raw
  };
};

/***/ }),

/***/ "./node_modules/@sideway/address/lib/tlds.js":
/*!***************************************************!*\
  !*** ./node_modules/@sideway/address/lib/tlds.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const internals = {}; // http://data.iana.org/TLD/tlds-alpha-by-domain.txt
// # Version 2021020700, Last Updated Sun Feb  7 07: 07: 01 2021 UTC

internals.tlds = ['AAA', 'AARP', 'ABARTH', 'ABB', 'ABBOTT', 'ABBVIE', 'ABC', 'ABLE', 'ABOGADO', 'ABUDHABI', 'AC', 'ACADEMY', 'ACCENTURE', 'ACCOUNTANT', 'ACCOUNTANTS', 'ACO', 'ACTOR', 'AD', 'ADAC', 'ADS', 'ADULT', 'AE', 'AEG', 'AERO', 'AETNA', 'AF', 'AFAMILYCOMPANY', 'AFL', 'AFRICA', 'AG', 'AGAKHAN', 'AGENCY', 'AI', 'AIG', 'AIRBUS', 'AIRFORCE', 'AIRTEL', 'AKDN', 'AL', 'ALFAROMEO', 'ALIBABA', 'ALIPAY', 'ALLFINANZ', 'ALLSTATE', 'ALLY', 'ALSACE', 'ALSTOM', 'AM', 'AMAZON', 'AMERICANEXPRESS', 'AMERICANFAMILY', 'AMEX', 'AMFAM', 'AMICA', 'AMSTERDAM', 'ANALYTICS', 'ANDROID', 'ANQUAN', 'ANZ', 'AO', 'AOL', 'APARTMENTS', 'APP', 'APPLE', 'AQ', 'AQUARELLE', 'AR', 'ARAB', 'ARAMCO', 'ARCHI', 'ARMY', 'ARPA', 'ART', 'ARTE', 'AS', 'ASDA', 'ASIA', 'ASSOCIATES', 'AT', 'ATHLETA', 'ATTORNEY', 'AU', 'AUCTION', 'AUDI', 'AUDIBLE', 'AUDIO', 'AUSPOST', 'AUTHOR', 'AUTO', 'AUTOS', 'AVIANCA', 'AW', 'AWS', 'AX', 'AXA', 'AZ', 'AZURE', 'BA', 'BABY', 'BAIDU', 'BANAMEX', 'BANANAREPUBLIC', 'BAND', 'BANK', 'BAR', 'BARCELONA', 'BARCLAYCARD', 'BARCLAYS', 'BAREFOOT', 'BARGAINS', 'BASEBALL', 'BASKETBALL', 'BAUHAUS', 'BAYERN', 'BB', 'BBC', 'BBT', 'BBVA', 'BCG', 'BCN', 'BD', 'BE', 'BEATS', 'BEAUTY', 'BEER', 'BENTLEY', 'BERLIN', 'BEST', 'BESTBUY', 'BET', 'BF', 'BG', 'BH', 'BHARTI', 'BI', 'BIBLE', 'BID', 'BIKE', 'BING', 'BINGO', 'BIO', 'BIZ', 'BJ', 'BLACK', 'BLACKFRIDAY', 'BLOCKBUSTER', 'BLOG', 'BLOOMBERG', 'BLUE', 'BM', 'BMS', 'BMW', 'BN', 'BNPPARIBAS', 'BO', 'BOATS', 'BOEHRINGER', 'BOFA', 'BOM', 'BOND', 'BOO', 'BOOK', 'BOOKING', 'BOSCH', 'BOSTIK', 'BOSTON', 'BOT', 'BOUTIQUE', 'BOX', 'BR', 'BRADESCO', 'BRIDGESTONE', 'BROADWAY', 'BROKER', 'BROTHER', 'BRUSSELS', 'BS', 'BT', 'BUDAPEST', 'BUGATTI', 'BUILD', 'BUILDERS', 'BUSINESS', 'BUY', 'BUZZ', 'BV', 'BW', 'BY', 'BZ', 'BZH', 'CA', 'CAB', 'CAFE', 'CAL', 'CALL', 'CALVINKLEIN', 'CAM', 'CAMERA', 'CAMP', 'CANCERRESEARCH', 'CANON', 'CAPETOWN', 'CAPITAL', 'CAPITALONE', 'CAR', 'CARAVAN', 'CARDS', 'CARE', 'CAREER', 'CAREERS', 'CARS', 'CASA', 'CASE', 'CASEIH', 'CASH', 'CASINO', 'CAT', 'CATERING', 'CATHOLIC', 'CBA', 'CBN', 'CBRE', 'CBS', 'CC', 'CD', 'CENTER', 'CEO', 'CERN', 'CF', 'CFA', 'CFD', 'CG', 'CH', 'CHANEL', 'CHANNEL', 'CHARITY', 'CHASE', 'CHAT', 'CHEAP', 'CHINTAI', 'CHRISTMAS', 'CHROME', 'CHURCH', 'CI', 'CIPRIANI', 'CIRCLE', 'CISCO', 'CITADEL', 'CITI', 'CITIC', 'CITY', 'CITYEATS', 'CK', 'CL', 'CLAIMS', 'CLEANING', 'CLICK', 'CLINIC', 'CLINIQUE', 'CLOTHING', 'CLOUD', 'CLUB', 'CLUBMED', 'CM', 'CN', 'CO', 'COACH', 'CODES', 'COFFEE', 'COLLEGE', 'COLOGNE', 'COM', 'COMCAST', 'COMMBANK', 'COMMUNITY', 'COMPANY', 'COMPARE', 'COMPUTER', 'COMSEC', 'CONDOS', 'CONSTRUCTION', 'CONSULTING', 'CONTACT', 'CONTRACTORS', 'COOKING', 'COOKINGCHANNEL', 'COOL', 'COOP', 'CORSICA', 'COUNTRY', 'COUPON', 'COUPONS', 'COURSES', 'CPA', 'CR', 'CREDIT', 'CREDITCARD', 'CREDITUNION', 'CRICKET', 'CROWN', 'CRS', 'CRUISE', 'CRUISES', 'CSC', 'CU', 'CUISINELLA', 'CV', 'CW', 'CX', 'CY', 'CYMRU', 'CYOU', 'CZ', 'DABUR', 'DAD', 'DANCE', 'DATA', 'DATE', 'DATING', 'DATSUN', 'DAY', 'DCLK', 'DDS', 'DE', 'DEAL', 'DEALER', 'DEALS', 'DEGREE', 'DELIVERY', 'DELL', 'DELOITTE', 'DELTA', 'DEMOCRAT', 'DENTAL', 'DENTIST', 'DESI', 'DESIGN', 'DEV', 'DHL', 'DIAMONDS', 'DIET', 'DIGITAL', 'DIRECT', 'DIRECTORY', 'DISCOUNT', 'DISCOVER', 'DISH', 'DIY', 'DJ', 'DK', 'DM', 'DNP', 'DO', 'DOCS', 'DOCTOR', 'DOG', 'DOMAINS', 'DOT', 'DOWNLOAD', 'DRIVE', 'DTV', 'DUBAI', 'DUCK', 'DUNLOP', 'DUPONT', 'DURBAN', 'DVAG', 'DVR', 'DZ', 'EARTH', 'EAT', 'EC', 'ECO', 'EDEKA', 'EDU', 'EDUCATION', 'EE', 'EG', 'EMAIL', 'EMERCK', 'ENERGY', 'ENGINEER', 'ENGINEERING', 'ENTERPRISES', 'EPSON', 'EQUIPMENT', 'ER', 'ERICSSON', 'ERNI', 'ES', 'ESQ', 'ESTATE', 'ET', 'ETISALAT', 'EU', 'EUROVISION', 'EUS', 'EVENTS', 'EXCHANGE', 'EXPERT', 'EXPOSED', 'EXPRESS', 'EXTRASPACE', 'FAGE', 'FAIL', 'FAIRWINDS', 'FAITH', 'FAMILY', 'FAN', 'FANS', 'FARM', 'FARMERS', 'FASHION', 'FAST', 'FEDEX', 'FEEDBACK', 'FERRARI', 'FERRERO', 'FI', 'FIAT', 'FIDELITY', 'FIDO', 'FILM', 'FINAL', 'FINANCE', 'FINANCIAL', 'FIRE', 'FIRESTONE', 'FIRMDALE', 'FISH', 'FISHING', 'FIT', 'FITNESS', 'FJ', 'FK', 'FLICKR', 'FLIGHTS', 'FLIR', 'FLORIST', 'FLOWERS', 'FLY', 'FM', 'FO', 'FOO', 'FOOD', 'FOODNETWORK', 'FOOTBALL', 'FORD', 'FOREX', 'FORSALE', 'FORUM', 'FOUNDATION', 'FOX', 'FR', 'FREE', 'FRESENIUS', 'FRL', 'FROGANS', 'FRONTDOOR', 'FRONTIER', 'FTR', 'FUJITSU', 'FUJIXEROX', 'FUN', 'FUND', 'FURNITURE', 'FUTBOL', 'FYI', 'GA', 'GAL', 'GALLERY', 'GALLO', 'GALLUP', 'GAME', 'GAMES', 'GAP', 'GARDEN', 'GAY', 'GB', 'GBIZ', 'GD', 'GDN', 'GE', 'GEA', 'GENT', 'GENTING', 'GEORGE', 'GF', 'GG', 'GGEE', 'GH', 'GI', 'GIFT', 'GIFTS', 'GIVES', 'GIVING', 'GL', 'GLADE', 'GLASS', 'GLE', 'GLOBAL', 'GLOBO', 'GM', 'GMAIL', 'GMBH', 'GMO', 'GMX', 'GN', 'GODADDY', 'GOLD', 'GOLDPOINT', 'GOLF', 'GOO', 'GOODYEAR', 'GOOG', 'GOOGLE', 'GOP', 'GOT', 'GOV', 'GP', 'GQ', 'GR', 'GRAINGER', 'GRAPHICS', 'GRATIS', 'GREEN', 'GRIPE', 'GROCERY', 'GROUP', 'GS', 'GT', 'GU', 'GUARDIAN', 'GUCCI', 'GUGE', 'GUIDE', 'GUITARS', 'GURU', 'GW', 'GY', 'HAIR', 'HAMBURG', 'HANGOUT', 'HAUS', 'HBO', 'HDFC', 'HDFCBANK', 'HEALTH', 'HEALTHCARE', 'HELP', 'HELSINKI', 'HERE', 'HERMES', 'HGTV', 'HIPHOP', 'HISAMITSU', 'HITACHI', 'HIV', 'HK', 'HKT', 'HM', 'HN', 'HOCKEY', 'HOLDINGS', 'HOLIDAY', 'HOMEDEPOT', 'HOMEGOODS', 'HOMES', 'HOMESENSE', 'HONDA', 'HORSE', 'HOSPITAL', 'HOST', 'HOSTING', 'HOT', 'HOTELES', 'HOTELS', 'HOTMAIL', 'HOUSE', 'HOW', 'HR', 'HSBC', 'HT', 'HU', 'HUGHES', 'HYATT', 'HYUNDAI', 'IBM', 'ICBC', 'ICE', 'ICU', 'ID', 'IE', 'IEEE', 'IFM', 'IKANO', 'IL', 'IM', 'IMAMAT', 'IMDB', 'IMMO', 'IMMOBILIEN', 'IN', 'INC', 'INDUSTRIES', 'INFINITI', 'INFO', 'ING', 'INK', 'INSTITUTE', 'INSURANCE', 'INSURE', 'INT', 'INTERNATIONAL', 'INTUIT', 'INVESTMENTS', 'IO', 'IPIRANGA', 'IQ', 'IR', 'IRISH', 'IS', 'ISMAILI', 'IST', 'ISTANBUL', 'IT', 'ITAU', 'ITV', 'IVECO', 'JAGUAR', 'JAVA', 'JCB', 'JE', 'JEEP', 'JETZT', 'JEWELRY', 'JIO', 'JLL', 'JM', 'JMP', 'JNJ', 'JO', 'JOBS', 'JOBURG', 'JOT', 'JOY', 'JP', 'JPMORGAN', 'JPRS', 'JUEGOS', 'JUNIPER', 'KAUFEN', 'KDDI', 'KE', 'KERRYHOTELS', 'KERRYLOGISTICS', 'KERRYPROPERTIES', 'KFH', 'KG', 'KH', 'KI', 'KIA', 'KIM', 'KINDER', 'KINDLE', 'KITCHEN', 'KIWI', 'KM', 'KN', 'KOELN', 'KOMATSU', 'KOSHER', 'KP', 'KPMG', 'KPN', 'KR', 'KRD', 'KRED', 'KUOKGROUP', 'KW', 'KY', 'KYOTO', 'KZ', 'LA', 'LACAIXA', 'LAMBORGHINI', 'LAMER', 'LANCASTER', 'LANCIA', 'LAND', 'LANDROVER', 'LANXESS', 'LASALLE', 'LAT', 'LATINO', 'LATROBE', 'LAW', 'LAWYER', 'LB', 'LC', 'LDS', 'LEASE', 'LECLERC', 'LEFRAK', 'LEGAL', 'LEGO', 'LEXUS', 'LGBT', 'LI', 'LIDL', 'LIFE', 'LIFEINSURANCE', 'LIFESTYLE', 'LIGHTING', 'LIKE', 'LILLY', 'LIMITED', 'LIMO', 'LINCOLN', 'LINDE', 'LINK', 'LIPSY', 'LIVE', 'LIVING', 'LIXIL', 'LK', 'LLC', 'LLP', 'LOAN', 'LOANS', 'LOCKER', 'LOCUS', 'LOFT', 'LOL', 'LONDON', 'LOTTE', 'LOTTO', 'LOVE', 'LPL', 'LPLFINANCIAL', 'LR', 'LS', 'LT', 'LTD', 'LTDA', 'LU', 'LUNDBECK', 'LUXE', 'LUXURY', 'LV', 'LY', 'MA', 'MACYS', 'MADRID', 'MAIF', 'MAISON', 'MAKEUP', 'MAN', 'MANAGEMENT', 'MANGO', 'MAP', 'MARKET', 'MARKETING', 'MARKETS', 'MARRIOTT', 'MARSHALLS', 'MASERATI', 'MATTEL', 'MBA', 'MC', 'MCKINSEY', 'MD', 'ME', 'MED', 'MEDIA', 'MEET', 'MELBOURNE', 'MEME', 'MEMORIAL', 'MEN', 'MENU', 'MERCKMSD', 'MG', 'MH', 'MIAMI', 'MICROSOFT', 'MIL', 'MINI', 'MINT', 'MIT', 'MITSUBISHI', 'MK', 'ML', 'MLB', 'MLS', 'MM', 'MMA', 'MN', 'MO', 'MOBI', 'MOBILE', 'MODA', 'MOE', 'MOI', 'MOM', 'MONASH', 'MONEY', 'MONSTER', 'MORMON', 'MORTGAGE', 'MOSCOW', 'MOTO', 'MOTORCYCLES', 'MOV', 'MOVIE', 'MP', 'MQ', 'MR', 'MS', 'MSD', 'MT', 'MTN', 'MTR', 'MU', 'MUSEUM', 'MUTUAL', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NAB', 'NAGOYA', 'NAME', 'NATIONWIDE', 'NATURA', 'NAVY', 'NBA', 'NC', 'NE', 'NEC', 'NET', 'NETBANK', 'NETFLIX', 'NETWORK', 'NEUSTAR', 'NEW', 'NEWHOLLAND', 'NEWS', 'NEXT', 'NEXTDIRECT', 'NEXUS', 'NF', 'NFL', 'NG', 'NGO', 'NHK', 'NI', 'NICO', 'NIKE', 'NIKON', 'NINJA', 'NISSAN', 'NISSAY', 'NL', 'NO', 'NOKIA', 'NORTHWESTERNMUTUAL', 'NORTON', 'NOW', 'NOWRUZ', 'NOWTV', 'NP', 'NR', 'NRA', 'NRW', 'NTT', 'NU', 'NYC', 'NZ', 'OBI', 'OBSERVER', 'OFF', 'OFFICE', 'OKINAWA', 'OLAYAN', 'OLAYANGROUP', 'OLDNAVY', 'OLLO', 'OM', 'OMEGA', 'ONE', 'ONG', 'ONL', 'ONLINE', 'ONYOURSIDE', 'OOO', 'OPEN', 'ORACLE', 'ORANGE', 'ORG', 'ORGANIC', 'ORIGINS', 'OSAKA', 'OTSUKA', 'OTT', 'OVH', 'PA', 'PAGE', 'PANASONIC', 'PARIS', 'PARS', 'PARTNERS', 'PARTS', 'PARTY', 'PASSAGENS', 'PAY', 'PCCW', 'PE', 'PET', 'PF', 'PFIZER', 'PG', 'PH', 'PHARMACY', 'PHD', 'PHILIPS', 'PHONE', 'PHOTO', 'PHOTOGRAPHY', 'PHOTOS', 'PHYSIO', 'PICS', 'PICTET', 'PICTURES', 'PID', 'PIN', 'PING', 'PINK', 'PIONEER', 'PIZZA', 'PK', 'PL', 'PLACE', 'PLAY', 'PLAYSTATION', 'PLUMBING', 'PLUS', 'PM', 'PN', 'PNC', 'POHL', 'POKER', 'POLITIE', 'PORN', 'POST', 'PR', 'PRAMERICA', 'PRAXI', 'PRESS', 'PRIME', 'PRO', 'PROD', 'PRODUCTIONS', 'PROF', 'PROGRESSIVE', 'PROMO', 'PROPERTIES', 'PROPERTY', 'PROTECTION', 'PRU', 'PRUDENTIAL', 'PS', 'PT', 'PUB', 'PW', 'PWC', 'PY', 'QA', 'QPON', 'QUEBEC', 'QUEST', 'QVC', 'RACING', 'RADIO', 'RAID', 'RE', 'READ', 'REALESTATE', 'REALTOR', 'REALTY', 'RECIPES', 'RED', 'REDSTONE', 'REDUMBRELLA', 'REHAB', 'REISE', 'REISEN', 'REIT', 'RELIANCE', 'REN', 'RENT', 'RENTALS', 'REPAIR', 'REPORT', 'REPUBLICAN', 'REST', 'RESTAURANT', 'REVIEW', 'REVIEWS', 'REXROTH', 'RICH', 'RICHARDLI', 'RICOH', 'RIL', 'RIO', 'RIP', 'RMIT', 'RO', 'ROCHER', 'ROCKS', 'RODEO', 'ROGERS', 'ROOM', 'RS', 'RSVP', 'RU', 'RUGBY', 'RUHR', 'RUN', 'RW', 'RWE', 'RYUKYU', 'SA', 'SAARLAND', 'SAFE', 'SAFETY', 'SAKURA', 'SALE', 'SALON', 'SAMSCLUB', 'SAMSUNG', 'SANDVIK', 'SANDVIKCOROMANT', 'SANOFI', 'SAP', 'SARL', 'SAS', 'SAVE', 'SAXO', 'SB', 'SBI', 'SBS', 'SC', 'SCA', 'SCB', 'SCHAEFFLER', 'SCHMIDT', 'SCHOLARSHIPS', 'SCHOOL', 'SCHULE', 'SCHWARZ', 'SCIENCE', 'SCJOHNSON', 'SCOT', 'SD', 'SE', 'SEARCH', 'SEAT', 'SECURE', 'SECURITY', 'SEEK', 'SELECT', 'SENER', 'SERVICES', 'SES', 'SEVEN', 'SEW', 'SEX', 'SEXY', 'SFR', 'SG', 'SH', 'SHANGRILA', 'SHARP', 'SHAW', 'SHELL', 'SHIA', 'SHIKSHA', 'SHOES', 'SHOP', 'SHOPPING', 'SHOUJI', 'SHOW', 'SHOWTIME', 'SI', 'SILK', 'SINA', 'SINGLES', 'SITE', 'SJ', 'SK', 'SKI', 'SKIN', 'SKY', 'SKYPE', 'SL', 'SLING', 'SM', 'SMART', 'SMILE', 'SN', 'SNCF', 'SO', 'SOCCER', 'SOCIAL', 'SOFTBANK', 'SOFTWARE', 'SOHU', 'SOLAR', 'SOLUTIONS', 'SONG', 'SONY', 'SOY', 'SPA', 'SPACE', 'SPORT', 'SPOT', 'SPREADBETTING', 'SR', 'SRL', 'SS', 'ST', 'STADA', 'STAPLES', 'STAR', 'STATEBANK', 'STATEFARM', 'STC', 'STCGROUP', 'STOCKHOLM', 'STORAGE', 'STORE', 'STREAM', 'STUDIO', 'STUDY', 'STYLE', 'SU', 'SUCKS', 'SUPPLIES', 'SUPPLY', 'SUPPORT', 'SURF', 'SURGERY', 'SUZUKI', 'SV', 'SWATCH', 'SWIFTCOVER', 'SWISS', 'SX', 'SY', 'SYDNEY', 'SYSTEMS', 'SZ', 'TAB', 'TAIPEI', 'TALK', 'TAOBAO', 'TARGET', 'TATAMOTORS', 'TATAR', 'TATTOO', 'TAX', 'TAXI', 'TC', 'TCI', 'TD', 'TDK', 'TEAM', 'TECH', 'TECHNOLOGY', 'TEL', 'TEMASEK', 'TENNIS', 'TEVA', 'TF', 'TG', 'TH', 'THD', 'THEATER', 'THEATRE', 'TIAA', 'TICKETS', 'TIENDA', 'TIFFANY', 'TIPS', 'TIRES', 'TIROL', 'TJ', 'TJMAXX', 'TJX', 'TK', 'TKMAXX', 'TL', 'TM', 'TMALL', 'TN', 'TO', 'TODAY', 'TOKYO', 'TOOLS', 'TOP', 'TORAY', 'TOSHIBA', 'TOTAL', 'TOURS', 'TOWN', 'TOYOTA', 'TOYS', 'TR', 'TRADE', 'TRADING', 'TRAINING', 'TRAVEL', 'TRAVELCHANNEL', 'TRAVELERS', 'TRAVELERSINSURANCE', 'TRUST', 'TRV', 'TT', 'TUBE', 'TUI', 'TUNES', 'TUSHU', 'TV', 'TVS', 'TW', 'TZ', 'UA', 'UBANK', 'UBS', 'UG', 'UK', 'UNICOM', 'UNIVERSITY', 'UNO', 'UOL', 'UPS', 'US', 'UY', 'UZ', 'VA', 'VACATIONS', 'VANA', 'VANGUARD', 'VC', 'VE', 'VEGAS', 'VENTURES', 'VERISIGN', 'VERSICHERUNG', 'VET', 'VG', 'VI', 'VIAJES', 'VIDEO', 'VIG', 'VIKING', 'VILLAS', 'VIN', 'VIP', 'VIRGIN', 'VISA', 'VISION', 'VIVA', 'VIVO', 'VLAANDEREN', 'VN', 'VODKA', 'VOLKSWAGEN', 'VOLVO', 'VOTE', 'VOTING', 'VOTO', 'VOYAGE', 'VU', 'VUELOS', 'WALES', 'WALMART', 'WALTER', 'WANG', 'WANGGOU', 'WATCH', 'WATCHES', 'WEATHER', 'WEATHERCHANNEL', 'WEBCAM', 'WEBER', 'WEBSITE', 'WED', 'WEDDING', 'WEIBO', 'WEIR', 'WF', 'WHOSWHO', 'WIEN', 'WIKI', 'WILLIAMHILL', 'WIN', 'WINDOWS', 'WINE', 'WINNERS', 'WME', 'WOLTERSKLUWER', 'WOODSIDE', 'WORK', 'WORKS', 'WORLD', 'WOW', 'WS', 'WTC', 'WTF', 'XBOX', 'XEROX', 'XFINITY', 'XIHUAN', 'XIN', 'XN--11B4C3D', 'XN--1CK2E1B', 'XN--1QQW23A', 'XN--2SCRJ9C', 'XN--30RR7Y', 'XN--3BST00M', 'XN--3DS443G', 'XN--3E0B707E', 'XN--3HCRJ9C', 'XN--3OQ18VL8PN36A', 'XN--3PXU8K', 'XN--42C2D9A', 'XN--45BR5CYL', 'XN--45BRJ9C', 'XN--45Q11C', 'XN--4GBRIM', 'XN--54B7FTA0CC', 'XN--55QW42G', 'XN--55QX5D', 'XN--5SU34J936BGSG', 'XN--5TZM5G', 'XN--6FRZ82G', 'XN--6QQ986B3XL', 'XN--80ADXHKS', 'XN--80AO21A', 'XN--80AQECDR1A', 'XN--80ASEHDB', 'XN--80ASWG', 'XN--8Y0A063A', 'XN--90A3AC', 'XN--90AE', 'XN--90AIS', 'XN--9DBQ2A', 'XN--9ET52U', 'XN--9KRT00A', 'XN--B4W605FERD', 'XN--BCK1B9A5DRE4C', 'XN--C1AVG', 'XN--C2BR7G', 'XN--CCK2B3B', 'XN--CCKWCXETD', 'XN--CG4BKI', 'XN--CLCHC0EA0B2G2A9GCD', 'XN--CZR694B', 'XN--CZRS0T', 'XN--CZRU2D', 'XN--D1ACJ3B', 'XN--D1ALF', 'XN--E1A4C', 'XN--ECKVDTC9D', 'XN--EFVY88H', 'XN--FCT429K', 'XN--FHBEI', 'XN--FIQ228C5HS', 'XN--FIQ64B', 'XN--FIQS8S', 'XN--FIQZ9S', 'XN--FJQ720A', 'XN--FLW351E', 'XN--FPCRJ9C3D', 'XN--FZC2C9E2C', 'XN--FZYS8D69UVGM', 'XN--G2XX48C', 'XN--GCKR3F0F', 'XN--GECRJ9C', 'XN--GK3AT1E', 'XN--H2BREG3EVE', 'XN--H2BRJ9C', 'XN--H2BRJ9C8C', 'XN--HXT814E', 'XN--I1B6B1A6A2E', 'XN--IMR513N', 'XN--IO0A7I', 'XN--J1AEF', 'XN--J1AMH', 'XN--J6W193G', 'XN--JLQ480N2RG', 'XN--JLQ61U9W7B', 'XN--JVR189M', 'XN--KCRX77D1X4A', 'XN--KPRW13D', 'XN--KPRY57D', 'XN--KPUT3I', 'XN--L1ACC', 'XN--LGBBAT1AD8J', 'XN--MGB9AWBF', 'XN--MGBA3A3EJT', 'XN--MGBA3A4F16A', 'XN--MGBA7C0BBN0A', 'XN--MGBAAKC7DVF', 'XN--MGBAAM7A8H', 'XN--MGBAB2BD', 'XN--MGBAH1A3HJKRD', 'XN--MGBAI9AZGQP6J', 'XN--MGBAYH7GPA', 'XN--MGBBH1A', 'XN--MGBBH1A71E', 'XN--MGBC0A9AZCG', 'XN--MGBCA7DZDO', 'XN--MGBCPQ6GPA1A', 'XN--MGBERP4A5D4AR', 'XN--MGBGU82A', 'XN--MGBI4ECEXP', 'XN--MGBPL2FH', 'XN--MGBT3DHD', 'XN--MGBTX2B', 'XN--MGBX4CD0AB', 'XN--MIX891F', 'XN--MK1BU44C', 'XN--MXTQ1M', 'XN--NGBC5AZD', 'XN--NGBE9E0A', 'XN--NGBRX', 'XN--NODE', 'XN--NQV7F', 'XN--NQV7FS00EMA', 'XN--NYQY26A', 'XN--O3CW4H', 'XN--OGBPF8FL', 'XN--OTU796D', 'XN--P1ACF', 'XN--P1AI', 'XN--PGBS0DH', 'XN--PSSY2U', 'XN--Q7CE6A', 'XN--Q9JYB4C', 'XN--QCKA1PMC', 'XN--QXA6A', 'XN--QXAM', 'XN--RHQV96G', 'XN--ROVU88B', 'XN--RVC1E0AM3E', 'XN--S9BRJ9C', 'XN--SES554G', 'XN--T60B56A', 'XN--TCKWE', 'XN--TIQ49XQYJ', 'XN--UNUP4Y', 'XN--VERMGENSBERATER-CTB', 'XN--VERMGENSBERATUNG-PWB', 'XN--VHQUV', 'XN--VUQ861B', 'XN--W4R85EL8FHU5DNRA', 'XN--W4RS40L', 'XN--WGBH1C', 'XN--WGBL6A', 'XN--XHQ521B', 'XN--XKC2AL3HYE2A', 'XN--XKC2DL3A5EE0H', 'XN--Y9A3AQ', 'XN--YFRO4I67O', 'XN--YGBI2AMMX', 'XN--ZFR164B', 'XXX', 'XYZ', 'YACHTS', 'YAHOO', 'YAMAXUN', 'YANDEX', 'YE', 'YODOBASHI', 'YOGA', 'YOKOHAMA', 'YOU', 'YOUTUBE', 'YT', 'YUN', 'ZA', 'ZAPPOS', 'ZARA', 'ZERO', 'ZIP', 'ZM', 'ZONE', 'ZUERICH', 'ZW']; // Keep as upper-case to make updating from source easier

module.exports = new Set(internals.tlds.map(tld => tld.toLowerCase()));

/***/ }),

/***/ "./node_modules/@sideway/address/lib/uri.js":
/*!**************************************************!*\
  !*** ./node_modules/@sideway/address/lib/uri.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Assert = __webpack_require__(/*! @hapi/hoek/lib/assert */ "./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/assert.js");

const EscapeRegex = __webpack_require__(/*! @hapi/hoek/lib/escapeRegex */ "./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/escapeRegex.js");

const internals = {};

internals.generate = function () {
  const rfc3986 = {};
  const hexDigit = '\\dA-Fa-f'; // HEXDIG = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"

  const hexDigitOnly = '[' + hexDigit + ']';
  const unreserved = '\\w-\\.~'; // unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"

  const subDelims = '!\\$&\'\\(\\)\\*\\+,;='; // sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="

  const pctEncoded = '%' + hexDigit; // pct-encoded = "%" HEXDIG HEXDIG

  const pchar = unreserved + pctEncoded + subDelims + ':@'; // pchar = unreserved / pct-encoded / sub-delims / ":" / "@"

  const pcharOnly = '[' + pchar + ']';
  const decOctect = '(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])'; // dec-octet = DIGIT / %x31-39 DIGIT / "1" 2DIGIT / "2" %x30-34 DIGIT / "25" %x30-35  ; 0-9 / 10-99 / 100-199 / 200-249 / 250-255

  rfc3986.ipv4address = '(?:' + decOctect + '\\.){3}' + decOctect; // IPv4address = dec-octet "." dec-octet "." dec-octet "." dec-octet

  /*
      h16 = 1*4HEXDIG ; 16 bits of address represented in hexadecimal
      ls32 = ( h16 ":" h16 ) / IPv4address ; least-significant 32 bits of address
      IPv6address =                            6( h16 ":" ) ls32
                  /                       "::" 5( h16 ":" ) ls32
                  / [               h16 ] "::" 4( h16 ":" ) ls32
                  / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
                  / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
                  / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
                  / [ *4( h16 ":" ) h16 ] "::"              ls32
                  / [ *5( h16 ":" ) h16 ] "::"              h16
                  / [ *6( h16 ":" ) h16 ] "::"
  */

  const h16 = hexDigitOnly + '{1,4}';
  const ls32 = '(?:' + h16 + ':' + h16 + '|' + rfc3986.ipv4address + ')';
  const IPv6SixHex = '(?:' + h16 + ':){6}' + ls32;
  const IPv6FiveHex = '::(?:' + h16 + ':){5}' + ls32;
  const IPv6FourHex = '(?:' + h16 + ')?::(?:' + h16 + ':){4}' + ls32;
  const IPv6ThreeHex = '(?:(?:' + h16 + ':){0,1}' + h16 + ')?::(?:' + h16 + ':){3}' + ls32;
  const IPv6TwoHex = '(?:(?:' + h16 + ':){0,2}' + h16 + ')?::(?:' + h16 + ':){2}' + ls32;
  const IPv6OneHex = '(?:(?:' + h16 + ':){0,3}' + h16 + ')?::' + h16 + ':' + ls32;
  const IPv6NoneHex = '(?:(?:' + h16 + ':){0,4}' + h16 + ')?::' + ls32;
  const IPv6NoneHex2 = '(?:(?:' + h16 + ':){0,5}' + h16 + ')?::' + h16;
  const IPv6NoneHex3 = '(?:(?:' + h16 + ':){0,6}' + h16 + ')?::';
  rfc3986.ipv4Cidr = '(?:\\d|[1-2]\\d|3[0-2])'; // IPv4 cidr = DIGIT / %x31-32 DIGIT / "3" %x30-32  ; 0-9 / 10-29 / 30-32

  rfc3986.ipv6Cidr = '(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])'; // IPv6 cidr = DIGIT / %x31-39 DIGIT / "1" %x0-1 DIGIT / "12" %x0-8;   0-9 / 10-99 / 100-119 / 120-128

  rfc3986.ipv6address = '(?:' + IPv6SixHex + '|' + IPv6FiveHex + '|' + IPv6FourHex + '|' + IPv6ThreeHex + '|' + IPv6TwoHex + '|' + IPv6OneHex + '|' + IPv6NoneHex + '|' + IPv6NoneHex2 + '|' + IPv6NoneHex3 + ')';
  rfc3986.ipvFuture = 'v' + hexDigitOnly + '+\\.[' + unreserved + subDelims + ':]+'; // IPvFuture = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )

  rfc3986.scheme = '[a-zA-Z][a-zA-Z\\d+-\\.]*'; // scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )

  rfc3986.schemeRegex = new RegExp(rfc3986.scheme);
  const userinfo = '[' + unreserved + pctEncoded + subDelims + ':]*'; // userinfo = *( unreserved / pct-encoded / sub-delims / ":" )

  const IPLiteral = '\\[(?:' + rfc3986.ipv6address + '|' + rfc3986.ipvFuture + ')\\]'; // IP-literal = "[" ( IPv6address / IPvFuture  ) "]"

  const regName = '[' + unreserved + pctEncoded + subDelims + ']{1,255}'; // reg-name = *( unreserved / pct-encoded / sub-delims )

  const host = '(?:' + IPLiteral + '|' + rfc3986.ipv4address + '|' + regName + ')'; // host = IP-literal / IPv4address / reg-name

  const port = '\\d*'; // port = *DIGIT

  const authority = '(?:' + userinfo + '@)?' + host + '(?::' + port + ')?'; // authority   = [ userinfo "@" ] host [ ":" port ]

  const authorityCapture = '(?:' + userinfo + '@)?(' + host + ')(?::' + port + ')?';
  /*
      segment       = *pchar
      segment-nz    = 1*pchar
      path          = path-abempty    ; begins with "/" '|' is empty
                  / path-absolute   ; begins with "/" but not "//"
                  / path-noscheme   ; begins with a non-colon segment
                  / path-rootless   ; begins with a segment
                  / path-empty      ; zero characters
      path-abempty  = *( "/" segment )
      path-absolute = "/" [ segment-nz *( "/" segment ) ]
      path-rootless = segment-nz *( "/" segment )
  */

  const segment = pcharOnly + '*';
  const segmentNz = pcharOnly + '+';
  const segmentNzNc = '[' + unreserved + pctEncoded + subDelims + '@' + ']+';
  const pathEmpty = '';
  const pathAbEmpty = '(?:\\/' + segment + ')*';
  const pathAbsolute = '\\/(?:' + segmentNz + pathAbEmpty + ')?';
  const pathRootless = segmentNz + pathAbEmpty;
  const pathNoScheme = segmentNzNc + pathAbEmpty;
  const pathAbNoAuthority = '(?:\\/\\/\\/' + segment + pathAbEmpty + ')'; // Used by file:///
  // hier-part = "//" authority path

  rfc3986.hierPart = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + '|' + pathAbsolute + '|' + pathRootless + '|' + pathAbNoAuthority + ')';
  rfc3986.hierPartCapture = '(?:' + '(?:\\/\\/' + authorityCapture + pathAbEmpty + ')' + '|' + pathAbsolute + '|' + pathRootless + ')'; // relative-part = "//" authority path-abempty / path-absolute / path-noscheme / path-empty

  rfc3986.relativeRef = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + '|' + pathAbsolute + '|' + pathNoScheme + '|' + pathEmpty + ')';
  rfc3986.relativeRefCapture = '(?:' + '(?:\\/\\/' + authorityCapture + pathAbEmpty + ')' + '|' + pathAbsolute + '|' + pathNoScheme + '|' + pathEmpty + ')'; // query = *( pchar / "/" / "?" )
  // query = *( pchar / "[" / "]" / "/" / "?" )

  rfc3986.query = '[' + pchar + '\\/\\?]*(?=#|$)'; //Finish matching either at the fragment part '|' end of the line.

  rfc3986.queryWithSquareBrackets = '[' + pchar + '\\[\\]\\/\\?]*(?=#|$)'; // fragment = *( pchar / "/" / "?" )

  rfc3986.fragment = '[' + pchar + '\\/\\?]*';
  return rfc3986;
};

internals.rfc3986 = internals.generate();
exports.ip = {
  v4Cidr: internals.rfc3986.ipv4Cidr,
  v6Cidr: internals.rfc3986.ipv6Cidr,
  ipv4: internals.rfc3986.ipv4address,
  ipv6: internals.rfc3986.ipv6address,
  ipvfuture: internals.rfc3986.ipvFuture
};

internals.createRegex = function (options) {
  const rfc = internals.rfc3986; // Construct expression

  const query = options.allowQuerySquareBrackets ? rfc.queryWithSquareBrackets : rfc.query;
  const suffix = '(?:\\?' + query + ')?' + '(?:#' + rfc.fragment + ')?'; // relative-ref = relative-part [ "?" query ] [ "#" fragment ]

  const relative = options.domain ? rfc.relativeRefCapture : rfc.relativeRef;

  if (options.relativeOnly) {
    return internals.wrap(relative + suffix);
  } // Custom schemes


  let customScheme = '';

  if (options.scheme) {
    Assert(options.scheme instanceof RegExp || typeof options.scheme === 'string' || Array.isArray(options.scheme), 'scheme must be a RegExp, String, or Array');
    const schemes = [].concat(options.scheme);
    Assert(schemes.length >= 1, 'scheme must have at least 1 scheme specified'); // Flatten the array into a string to be used to match the schemes

    const selections = [];

    for (let i = 0; i < schemes.length; ++i) {
      const scheme = schemes[i];
      Assert(scheme instanceof RegExp || typeof scheme === 'string', 'scheme at position ' + i + ' must be a RegExp or String');

      if (scheme instanceof RegExp) {
        selections.push(scheme.source.toString());
      } else {
        Assert(rfc.schemeRegex.test(scheme), 'scheme at position ' + i + ' must be a valid scheme');
        selections.push(EscapeRegex(scheme));
      }
    }

    customScheme = selections.join('|');
  } // URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]


  const scheme = customScheme ? '(?:' + customScheme + ')' : rfc.scheme;
  const absolute = '(?:' + scheme + ':' + (options.domain ? rfc.hierPartCapture : rfc.hierPart) + ')';
  const prefix = options.allowRelative ? '(?:' + absolute + '|' + relative + ')' : absolute;
  return internals.wrap(prefix + suffix, customScheme);
};

internals.wrap = function (raw, scheme) {
  raw = `(?=.)(?!https?\:/$)${raw}`; // Require at least one character and explicitly forbid 'http:/'

  return {
    raw,
    regex: new RegExp(`^${raw}$`),
    scheme
  };
};

internals.uriRegex = internals.createRegex({});

exports.regex = function (options = {}) {
  if (options.scheme || options.allowRelative || options.relativeOnly || options.allowQuerySquareBrackets || options.domain) {
    return internals.createRegex(options);
  }

  return internals.uriRegex;
};

/***/ }),

/***/ "./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/assert.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/assert.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const AssertError = __webpack_require__(/*! ./error */ "./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/error.js");

const internals = {};

module.exports = function (condition, ...args) {
  if (condition) {
    return;
  }

  if (args.length === 1 && args[0] instanceof Error) {
    throw args[0];
  }

  throw new AssertError(args);
};

/***/ }),

/***/ "./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/error.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/error.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Stringify = __webpack_require__(/*! ./stringify */ "./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/stringify.js");

const internals = {};
module.exports = class extends Error {
  constructor(args) {
    const msgs = args.filter(arg => arg !== '').map(arg => {
      return typeof arg === 'string' ? arg : arg instanceof Error ? arg.message : Stringify(arg);
    });
    super(msgs.join(' ') || 'Unknown error');

    if (typeof Error.captureStackTrace === 'function') {
      // $lab:coverage:ignore$
      Error.captureStackTrace(this, exports.assert);
    }
  }

};

/***/ }),

/***/ "./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/escapeRegex.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/escapeRegex.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const internals = {};

module.exports = function (string) {
  // Escape ^$.*+-?=!:|\/()[]{},
  return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
};

/***/ }),

/***/ "./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/stringify.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@sideway/address/node_modules/@hapi/hoek/lib/stringify.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const internals = {};

module.exports = function (...args) {
  try {
    return JSON.stringify.apply(null, args);
  } catch (err) {
    return '[Cannot display object: ' + err.message + ']';
  }
};

/***/ }),

/***/ "./node_modules/final-form/dist/final-form.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/final-form/dist/final-form.es.js ***!
  \*******************************************************/
/*! exports provided: ARRAY_ERROR, FORM_ERROR, configOptions, createForm, fieldSubscriptionItems, formSubscriptionItems, getIn, setIn, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_ERROR", function() { return ARRAY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_ERROR", function() { return FORM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configOptions", function() { return configOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForm", function() { return createForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldSubscriptionItems", function() { return fieldSubscriptionItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formSubscriptionItems", function() { return formSubscriptionItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

 //      

var keysCache = {};
var keysRegex = /[.[\]]+/;

var toPath = function toPath(key) {
  if (key === null || key === undefined || !key.length) {
    return [];
  }

  if (typeof key !== 'string') {
    throw new Error('toPath() expects a string');
  }

  if (keysCache[key] == null) {
    keysCache[key] = key.split(keysRegex).filter(Boolean);
  }

  return keysCache[key];
}; //      


var getIn = function getIn(state, complexKey) {
  // Intentionally using iteration rather than recursion
  var path = toPath(complexKey);
  var current = state;

  for (var i = 0; i < path.length; i++) {
    var key = path[i];

    if (current === undefined || current === null || typeof current !== 'object' || Array.isArray(current) && isNaN(key)) {
      return undefined;
    }

    current = current[key];
  }

  return current;
};

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

var setInRecursor = function setInRecursor(current, index, path, value, destroyArrays) {
  if (index >= path.length) {
    // end of recursion
    return value;
  }

  var key = path[index]; // determine type of key

  if (isNaN(key)) {
    var _extends2; // object set


    if (current === undefined || current === null) {
      var _ref; // recurse


      var _result2 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // delete or create an object


      return _result2 === undefined ? undefined : (_ref = {}, _ref[key] = _result2, _ref);
    }

    if (Array.isArray(current)) {
      throw new Error('Cannot set a non-numeric property on an array');
    } // current exists, so make a copy of all its values, and add/update the new one


    var _result = setInRecursor(current[key], index + 1, path, value, destroyArrays);

    if (_result === undefined) {
      var numKeys = Object.keys(current).length;

      if (current[key] === undefined && numKeys === 0) {
        // object was already empty
        return undefined;
      }

      if (current[key] !== undefined && numKeys <= 1) {
        // only key we had was the one we are deleting
        if (!isNaN(path[index - 1]) && !destroyArrays) {
          // we are in an array, so return an empty object
          return {};
        } else {
          return undefined;
        }
      }

      var _removed = current[key],
          _final = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(current, [key].map(_toPropertyKey));

      return _final;
    } // set result in key


    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current, (_extends2 = {}, _extends2[key] = _result, _extends2));
  } // array set


  var numericKey = Number(key);

  if (current === undefined || current === null) {
    // recurse
    var _result3 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // if nothing returned, delete it


    if (_result3 === undefined) {
      return undefined;
    } // create an array


    var _array = [];
    _array[numericKey] = _result3;
    return _array;
  }

  if (!Array.isArray(current)) {
    throw new Error('Cannot set a numeric property on an object');
  } // recurse


  var existingValue = current[numericKey];
  var result = setInRecursor(existingValue, index + 1, path, value, destroyArrays); // current exists, so make a copy of all its values, and add/update the new one

  var array = [].concat(current);

  if (destroyArrays && result === undefined) {
    array.splice(numericKey, 1);

    if (array.length === 0) {
      return undefined;
    }
  } else {
    array[numericKey] = result;
  }

  return array;
};

var setIn = function setIn(state, key, value, destroyArrays) {
  if (destroyArrays === void 0) {
    destroyArrays = false;
  }

  if (state === undefined || state === null) {
    throw new Error("Cannot call setIn() with " + String(state) + " state");
  }

  if (key === undefined || key === null) {
    throw new Error("Cannot call setIn() with " + String(key) + " key");
  } // Recursive function needs to accept and return State, but public API should
  // only deal with Objects


  return setInRecursor(state, 0, toPath(key), value, destroyArrays);
};

var FORM_ERROR = 'FINAL_FORM/form-error';
var ARRAY_ERROR = 'FINAL_FORM/array-error'; //      

/**
 * Converts internal field state to published field state
 */

function publishFieldState(formState, field) {
  var errors = formState.errors,
      initialValues = formState.initialValues,
      lastSubmittedValues = formState.lastSubmittedValues,
      submitErrors = formState.submitErrors,
      submitFailed = formState.submitFailed,
      submitSucceeded = formState.submitSucceeded,
      submitting = formState.submitting,
      values = formState.values;
  var active = field.active,
      blur = field.blur,
      change = field.change,
      data = field.data,
      focus = field.focus,
      modified = field.modified,
      modifiedSinceLastSubmit = field.modifiedSinceLastSubmit,
      name = field.name,
      touched = field.touched,
      validating = field.validating,
      visited = field.visited;
  var value = getIn(values, name);
  var error = getIn(errors, name);

  if (error && error[ARRAY_ERROR]) {
    error = error[ARRAY_ERROR];
  }

  var submitError = submitErrors && getIn(submitErrors, name);
  var initial = initialValues && getIn(initialValues, name);
  var pristine = field.isEqual(initial, value);
  var dirtySinceLastSubmit = !!(lastSubmittedValues && !field.isEqual(getIn(lastSubmittedValues, name), value));
  var valid = !error && !submitError;
  return {
    active: active,
    blur: blur,
    change: change,
    data: data,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    error: error,
    focus: focus,
    initial: initial,
    invalid: !valid,
    length: Array.isArray(value) ? value.length : undefined,
    modified: modified,
    modifiedSinceLastSubmit: modifiedSinceLastSubmit,
    name: name,
    pristine: pristine,
    submitError: submitError,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitting: submitting,
    touched: touched,
    valid: valid,
    value: value,
    visited: visited,
    validating: validating
  };
} //      


var fieldSubscriptionItems = ['active', 'data', 'dirty', 'dirtySinceLastSubmit', 'error', 'initial', 'invalid', 'length', 'modified', 'modifiedSinceLastSubmit', 'pristine', 'submitError', 'submitFailed', 'submitSucceeded', 'submitting', 'touched', 'valid', 'value', 'visited', 'validating']; //      

var shallowEqual = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== 'object' || !a || typeof b !== 'object' || !b) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}; //      


function subscriptionFilter(dest, src, previous, subscription, keys, shallowEqualKeys) {
  var different = false;
  keys.forEach(function (key) {
    if (subscription[key]) {
      dest[key] = src[key];

      if (!previous || (~shallowEqualKeys.indexOf(key) ? !shallowEqual(src[key], previous[key]) : src[key] !== previous[key])) {
        different = true;
      }
    }
  });
  return different;
} //      


var shallowEqualKeys = ['data'];
/**
 * Filters items in a FieldState based on a FieldSubscription
 */

var filterFieldState = function filterFieldState(state, previousState, subscription, force) {
  var result = {
    blur: state.blur,
    change: state.change,
    focus: state.focus,
    name: state.name
  };
  var different = subscriptionFilter(result, state, previousState, subscription, fieldSubscriptionItems, shallowEqualKeys) || !previousState;
  return different || force ? result : undefined;
}; //      


var formSubscriptionItems = ['active', 'dirty', 'dirtyFields', 'dirtyFieldsSinceLastSubmit', 'dirtySinceLastSubmit', 'error', 'errors', 'hasSubmitErrors', 'hasValidationErrors', 'initialValues', 'invalid', 'modified', 'modifiedSinceLastSubmit', 'pristine', 'submitting', 'submitError', 'submitErrors', 'submitFailed', 'submitSucceeded', 'touched', 'valid', 'validating', 'values', 'visited']; //      

var shallowEqualKeys$1 = ['touched', 'visited'];
/**
 * Filters items in a FormState based on a FormSubscription
 */

function filterFormState(state, previousState, subscription, force) {
  var result = {};
  var different = subscriptionFilter(result, state, previousState, subscription, formSubscriptionItems, shallowEqualKeys$1) || !previousState;
  return different || force ? result : undefined;
} //      


var memoize = function memoize(fn) {
  var lastArgs;
  var lastResult;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!lastArgs || args.length !== lastArgs.length || args.some(function (arg, index) {
      return !shallowEqual(lastArgs[index], arg);
    })) {
      lastArgs = args;
      lastResult = fn.apply(void 0, args);
    }

    return lastResult;
  };
};

var isPromise = function (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

var version = "4.20.2";
var configOptions = ['debug', 'initialValues', 'keepDirtyOnReinitialize', 'mutators', 'onSubmit', 'validate', 'validateOnBlur'];

var tripleEquals = function tripleEquals(a, b) {
  return a === b;
};

var hasAnyError = function hasAnyError(errors) {
  return Object.keys(errors).some(function (key) {
    var value = errors[key];

    if (value && typeof value === 'object' && !(value instanceof Error)) {
      return hasAnyError(value);
    }

    return typeof value !== 'undefined';
  });
};

function convertToExternalFormState(_ref) {
  var active = _ref.active,
      dirtySinceLastSubmit = _ref.dirtySinceLastSubmit,
      modifiedSinceLastSubmit = _ref.modifiedSinceLastSubmit,
      error = _ref.error,
      errors = _ref.errors,
      initialValues = _ref.initialValues,
      pristine = _ref.pristine,
      submitting = _ref.submitting,
      submitFailed = _ref.submitFailed,
      submitSucceeded = _ref.submitSucceeded,
      submitError = _ref.submitError,
      submitErrors = _ref.submitErrors,
      valid = _ref.valid,
      validating = _ref.validating,
      values = _ref.values;
  return {
    active: active,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    modifiedSinceLastSubmit: modifiedSinceLastSubmit,
    error: error,
    errors: errors,
    hasSubmitErrors: !!(submitError || submitErrors && hasAnyError(submitErrors)),
    hasValidationErrors: !!(error || hasAnyError(errors)),
    invalid: !valid,
    initialValues: initialValues,
    pristine: pristine,
    submitting: submitting,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitError: submitError,
    submitErrors: submitErrors,
    valid: valid,
    validating: validating > 0,
    values: values
  };
}

function notifySubscriber(subscriber, subscription, state, lastState, filter, force) {
  var notification = filter(state, lastState, subscription, force);

  if (notification) {
    subscriber(notification);
    return true;
  }

  return false;
}

function notify(_ref2, state, lastState, filter, force) {
  var entries = _ref2.entries;
  Object.keys(entries).forEach(function (key) {
    var entry = entries[Number(key)]; // istanbul ignore next

    if (entry) {
      var subscription = entry.subscription,
          subscriber = entry.subscriber,
          notified = entry.notified;

      if (notifySubscriber(subscriber, subscription, state, lastState, filter, force || !notified)) {
        entry.notified = true;
      }
    }
  });
}

function createForm(config) {
  if (!config) {
    throw new Error('No config specified');
  }

  var debug = config.debug,
      destroyOnUnregister = config.destroyOnUnregister,
      keepDirtyOnReinitialize = config.keepDirtyOnReinitialize,
      initialValues = config.initialValues,
      mutators = config.mutators,
      onSubmit = config.onSubmit,
      validate = config.validate,
      validateOnBlur = config.validateOnBlur;

  if (!onSubmit) {
    throw new Error('No onSubmit function specified');
  }

  var state = {
    subscribers: {
      index: 0,
      entries: {}
    },
    fieldSubscribers: {},
    fields: {},
    formState: {
      dirtySinceLastSubmit: false,
      modifiedSinceLastSubmit: false,
      errors: {},
      initialValues: initialValues && Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialValues),
      invalid: false,
      pristine: true,
      submitting: false,
      submitFailed: false,
      submitSucceeded: false,
      resetWhileSubmitting: false,
      valid: true,
      validating: 0,
      values: initialValues ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialValues) : {}
    },
    lastFormState: undefined
  };
  var inBatch = 0;
  var validationPaused = false;
  var validationBlocked = false;
  var preventNotificationWhileValidationPaused = false;
  var nextAsyncValidationKey = 0;
  var asyncValidationPromises = {};

  var clearAsyncValidationPromise = function clearAsyncValidationPromise(key) {
    return function (result) {
      delete asyncValidationPromises[key];
      return result;
    };
  };

  var changeValue = function changeValue(state, name, mutate) {
    var before = getIn(state.formState.values, name);
    var after = mutate(before);
    state.formState.values = setIn(state.formState.values, name, after) || {};
  };

  var renameField = function renameField(state, from, to) {
    if (state.fields[from]) {
      var _extends2, _extends3;

      state.fields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fields, (_extends2 = {}, _extends2[to] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fields[from], {
        name: to,
        // rebind event handlers
        blur: function blur() {
          return api.blur(to);
        },
        change: function change(value) {
          return api.change(to, value);
        },
        focus: function focus() {
          return api.focus(to);
        },
        lastFieldState: undefined
      }), _extends2));
      delete state.fields[from];
      state.fieldSubscribers = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fieldSubscribers, (_extends3 = {}, _extends3[to] = state.fieldSubscribers[from], _extends3));
      delete state.fieldSubscribers[from];
      var value = getIn(state.formState.values, from);
      state.formState.values = setIn(state.formState.values, from, undefined) || {};
      state.formState.values = setIn(state.formState.values, to, value);
      delete state.lastFormState;
    }
  }; // bind state to mutators


  var getMutatorApi = function getMutatorApi(key) {
    return function () {
      // istanbul ignore next
      if (mutators) {
        // ^^ causes branch coverage warning, but needed to appease the Flow gods
        var mutatableState = {
          formState: state.formState,
          fields: state.fields,
          fieldSubscribers: state.fieldSubscribers,
          lastFormState: state.lastFormState
        };

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var returnValue = mutators[key](args, mutatableState, {
          changeValue: changeValue,
          getIn: getIn,
          renameField: renameField,
          resetFieldState: api.resetFieldState,
          setIn: setIn,
          shallowEqual: shallowEqual
        });
        state.formState = mutatableState.formState;
        state.fields = mutatableState.fields;
        state.fieldSubscribers = mutatableState.fieldSubscribers;
        state.lastFormState = mutatableState.lastFormState;
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
        return returnValue;
      }
    };
  };

  var mutatorsApi = mutators ? Object.keys(mutators).reduce(function (result, key) {
    result[key] = getMutatorApi(key);
    return result;
  }, {}) : {};

  var runRecordLevelValidation = function runRecordLevelValidation(setErrors) {
    var promises = [];

    if (validate) {
      var errorsOrPromise = validate(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.formState.values)); // clone to avoid writing

      if (isPromise(errorsOrPromise)) {
        promises.push(errorsOrPromise.then(setErrors));
      } else {
        setErrors(errorsOrPromise);
      }
    }

    return promises;
  };

  var getValidators = function getValidators(field) {
    return Object.keys(field.validators).reduce(function (result, index) {
      var validator = field.validators[Number(index)]();

      if (validator) {
        result.push(validator);
      }

      return result;
    }, []);
  };

  var runFieldLevelValidation = function runFieldLevelValidation(name, setError) {
    var promises = [];
    var validators = getValidators(state.fields[name]);

    if (validators.length) {
      var error;
      validators.forEach(function (validator) {
        var errorOrPromise = validator(getIn(state.formState.values, name), state.formState.values, validator.length === 0 || validator.length === 3 ? publishFieldState(state.formState, state.fields[name]) : undefined);

        if (errorOrPromise && isPromise(errorOrPromise)) {
          state.fields[name].validating = true;
          var promise = errorOrPromise.then(function (error) {
            state.fields[name].validating = false;
            setError(error);
          }); // errors must be resolved, not rejected

          promises.push(promise);
        } else if (!error) {
          // first registered validator wins
          error = errorOrPromise;
        }
      });
      setError(error);
    }

    return promises;
  };

  var runValidation = function runValidation(fieldChanged, callback) {
    if (validationPaused) {
      validationBlocked = true;
      callback();
      return;
    }

    var fields = state.fields,
        formState = state.formState;

    var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

    var fieldKeys = Object.keys(safeFields);

    if (!validate && !fieldKeys.some(function (key) {
      return getValidators(safeFields[key]).length;
    })) {
      callback();
      return; // no validation rules
    } // pare down field keys to actually validate


    var limitedFieldLevelValidation = false;

    if (fieldChanged) {
      var changedField = safeFields[fieldChanged];

      if (changedField) {
        var validateFields = changedField.validateFields;

        if (validateFields) {
          limitedFieldLevelValidation = true;
          fieldKeys = validateFields.length ? validateFields.concat(fieldChanged) : [fieldChanged];
        }
      }
    }

    var recordLevelErrors = {};
    var fieldLevelErrors = {};
    var promises = [].concat(runRecordLevelValidation(function (errors) {
      recordLevelErrors = errors || {};
    }), fieldKeys.reduce(function (result, name) {
      return result.concat(runFieldLevelValidation(name, function (error) {
        fieldLevelErrors[name] = error;
      }));
    }, []));
    var hasAsyncValidations = promises.length > 0;
    var asyncValidationPromiseKey = ++nextAsyncValidationKey;
    var promise = Promise.all(promises).then(clearAsyncValidationPromise(asyncValidationPromiseKey)); // backwards-compat: add promise to submit-blocking promises iff there are any promises to await

    if (hasAsyncValidations) {
      asyncValidationPromises[asyncValidationPromiseKey] = promise;
    }

    var processErrors = function processErrors() {
      var merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, limitedFieldLevelValidation ? formState.errors : {}, recordLevelErrors);

      var forEachError = function forEachError(fn) {
        fieldKeys.forEach(function (name) {
          if (fields[name]) {
            // make sure field is still registered
            // field-level errors take precedent over record-level errors
            var recordLevelError = getIn(recordLevelErrors, name);
            var errorFromParent = getIn(merged, name);
            var hasFieldLevelValidation = getValidators(safeFields[name]).length;
            var fieldLevelError = fieldLevelErrors[name];
            fn(name, hasFieldLevelValidation && fieldLevelError || validate && recordLevelError || (!recordLevelError && !limitedFieldLevelValidation ? errorFromParent : undefined));
          }
        });
      };

      forEachError(function (name, error) {
        merged = setIn(merged, name, error) || {};
      });
      forEachError(function (name, error) {
        if (error && error[ARRAY_ERROR]) {
          var existing = getIn(merged, name);
          var copy = [].concat(existing);
          copy[ARRAY_ERROR] = error[ARRAY_ERROR];
          merged = setIn(merged, name, copy);
        }
      });

      if (!shallowEqual(formState.errors, merged)) {
        formState.errors = merged;
      }

      formState.error = recordLevelErrors[FORM_ERROR];
    }; // process sync errors


    processErrors(); // sync errors have been set. notify listeners while we wait for others

    callback();

    if (hasAsyncValidations) {
      state.formState.validating++;
      callback();

      var afterPromise = function afterPromise() {
        state.formState.validating--;
        callback();
      };

      promise.then(function () {
        if (nextAsyncValidationKey > asyncValidationPromiseKey) {
          // if this async validator has been superseded by another, ignore its results
          return;
        }

        processErrors();
      }).then(afterPromise, afterPromise);
    }
  };

  var notifyFieldListeners = function notifyFieldListeners(name) {
    if (inBatch) {
      return;
    }

    var fields = state.fields,
        fieldSubscribers = state.fieldSubscribers,
        formState = state.formState;

    var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

    var notifyField = function notifyField(name) {
      var field = safeFields[name];
      var fieldState = publishFieldState(formState, field);
      var lastFieldState = field.lastFieldState;
      field.lastFieldState = fieldState;
      var fieldSubscriber = fieldSubscribers[name];

      if (fieldSubscriber) {
        notify(fieldSubscriber, fieldState, lastFieldState, filterFieldState, lastFieldState === undefined);
      }
    };

    if (name) {
      notifyField(name);
    } else {
      Object.keys(safeFields).forEach(notifyField);
    }
  };

  var markAllFieldsTouched = function markAllFieldsTouched() {
    Object.keys(state.fields).forEach(function (key) {
      state.fields[key].touched = true;
    });
  };

  var hasSyncErrors = function hasSyncErrors() {
    return !!(state.formState.error || hasAnyError(state.formState.errors));
  };

  var calculateNextFormState = function calculateNextFormState() {
    var fields = state.fields,
        formState = state.formState,
        lastFormState = state.lastFormState;

    var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

    var safeFieldKeys = Object.keys(safeFields); // calculate dirty/pristine

    var foundDirty = false;
    var dirtyFields = safeFieldKeys.reduce(function (result, key) {
      var dirty = !safeFields[key].isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

      if (dirty) {
        foundDirty = true;
        result[key] = true;
      }

      return result;
    }, {});
    var dirtyFieldsSinceLastSubmit = safeFieldKeys.reduce(function (result, key) {
      // istanbul ignore next
      var nonNullLastSubmittedValues = formState.lastSubmittedValues || {}; // || {} is for flow, but causes branch coverage complaint

      if (!safeFields[key].isEqual(getIn(formState.values, key), getIn(nonNullLastSubmittedValues, key))) {
        result[key] = true;
      }

      return result;
    }, {});
    formState.pristine = !foundDirty;
    formState.dirtySinceLastSubmit = !!(formState.lastSubmittedValues && Object.values(dirtyFieldsSinceLastSubmit).some(function (value) {
      return value;
    }));
    formState.modifiedSinceLastSubmit = !!(formState.lastSubmittedValues && // Object.values would treat values as mixed (facebook/flow#2221)
    Object.keys(safeFields).some(function (value) {
      return safeFields[value].modifiedSinceLastSubmit;
    }));
    formState.valid = !formState.error && !formState.submitError && !hasAnyError(formState.errors) && !(formState.submitErrors && hasAnyError(formState.submitErrors));
    var nextFormState = convertToExternalFormState(formState);

    var _safeFieldKeys$reduce = safeFieldKeys.reduce(function (result, key) {
      result.modified[key] = safeFields[key].modified;
      result.touched[key] = safeFields[key].touched;
      result.visited[key] = safeFields[key].visited;
      return result;
    }, {
      modified: {},
      touched: {},
      visited: {}
    }),
        modified = _safeFieldKeys$reduce.modified,
        touched = _safeFieldKeys$reduce.touched,
        visited = _safeFieldKeys$reduce.visited;

    nextFormState.dirtyFields = lastFormState && shallowEqual(lastFormState.dirtyFields, dirtyFields) ? lastFormState.dirtyFields : dirtyFields;
    nextFormState.dirtyFieldsSinceLastSubmit = lastFormState && shallowEqual(lastFormState.dirtyFieldsSinceLastSubmit, dirtyFieldsSinceLastSubmit) ? lastFormState.dirtyFieldsSinceLastSubmit : dirtyFieldsSinceLastSubmit;
    nextFormState.modified = lastFormState && shallowEqual(lastFormState.modified, modified) ? lastFormState.modified : modified;
    nextFormState.touched = lastFormState && shallowEqual(lastFormState.touched, touched) ? lastFormState.touched : touched;
    nextFormState.visited = lastFormState && shallowEqual(lastFormState.visited, visited) ? lastFormState.visited : visited;
    return lastFormState && shallowEqual(lastFormState, nextFormState) ? lastFormState : nextFormState;
  };

  var callDebug = function callDebug() {
    return debug && "development" !== 'production' && debug(calculateNextFormState(), Object.keys(state.fields).reduce(function (result, key) {
      result[key] = state.fields[key];
      return result;
    }, {}));
  };

  var notifying = false;
  var scheduleNotification = false;

  var notifyFormListeners = function notifyFormListeners() {
    if (notifying) {
      scheduleNotification = true;
    } else {
      notifying = true;
      callDebug();

      if (!inBatch && !(validationPaused && preventNotificationWhileValidationPaused)) {
        var lastFormState = state.lastFormState;
        var nextFormState = calculateNextFormState();

        if (nextFormState !== lastFormState) {
          state.lastFormState = nextFormState;
          notify(state.subscribers, nextFormState, lastFormState, filterFormState);
        }
      }

      notifying = false;

      if (scheduleNotification) {
        scheduleNotification = false;
        notifyFormListeners();
      }
    }
  };

  var beforeSubmit = function beforeSubmit() {
    return Object.keys(state.fields).some(function (name) {
      return state.fields[name].beforeSubmit && state.fields[name].beforeSubmit() === false;
    });
  };

  var afterSubmit = function afterSubmit() {
    return Object.keys(state.fields).forEach(function (name) {
      return state.fields[name].afterSubmit && state.fields[name].afterSubmit();
    });
  };

  var resetModifiedAfterSubmit = function resetModifiedAfterSubmit() {
    return Object.keys(state.fields).forEach(function (key) {
      return state.fields[key].modifiedSinceLastSubmit = false;
    });
  }; // generate initial errors


  runValidation(undefined, function () {
    notifyFormListeners();
  });
  var api = {
    batch: function batch(fn) {
      inBatch++;
      fn();
      inBatch--;
      notifyFieldListeners();
      notifyFormListeners();
    },
    blur: function blur(name) {
      var fields = state.fields,
          formState = state.formState;
      var previous = fields[name];

      if (previous) {
        // can only blur registered fields
        delete formState.active;
        fields[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, {
          active: false,
          touched: true
        });

        if (validateOnBlur) {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        } else {
          notifyFieldListeners();
          notifyFormListeners();
        }
      }
    },
    change: function change(name, value) {
      var fields = state.fields,
          formState = state.formState;

      if (getIn(formState.values, name) !== value) {
        changeValue(state, name, function () {
          return value;
        });
        var previous = fields[name];

        if (previous) {
          // only track modified for registered fields
          fields[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, {
            modified: true,
            modifiedSinceLastSubmit: !!formState.lastSubmittedValues
          });
        }

        if (validateOnBlur) {
          notifyFieldListeners();
          notifyFormListeners();
        } else {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        }
      }
    },

    get destroyOnUnregister() {
      return !!destroyOnUnregister;
    },

    set destroyOnUnregister(value) {
      destroyOnUnregister = value;
    },

    focus: function focus(name) {
      var field = state.fields[name];

      if (field && !field.active) {
        state.formState.active = name;
        field.active = true;
        field.visited = true;
        notifyFieldListeners();
        notifyFormListeners();
      }
    },
    mutators: mutatorsApi,
    getFieldState: function getFieldState(name) {
      var field = state.fields[name];
      return field && field.lastFieldState;
    },
    getRegisteredFields: function getRegisteredFields() {
      return Object.keys(state.fields);
    },
    getState: function getState() {
      return calculateNextFormState();
    },
    initialize: function initialize(data) {
      var fields = state.fields,
          formState = state.formState;

      var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

      var values = typeof data === 'function' ? data(formState.values) : data;

      if (!keepDirtyOnReinitialize) {
        formState.values = values;
      }
      /**
       * Hello, inquisitive code reader! Thanks for taking the time to dig in!
       *
       * The following code is the way it is to allow for non-registered deep
       * field values to be set via initialize()
       */
      // save dirty values


      var savedDirtyValues = keepDirtyOnReinitialize ? Object.keys(safeFields).reduce(function (result, key) {
        var field = safeFields[key];
        var pristine = field.isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

        if (!pristine) {
          result[key] = getIn(formState.values, key);
        }

        return result;
      }, {}) : {}; // update initalValues and values

      formState.initialValues = values;
      formState.values = values; // restore the dirty values

      Object.keys(savedDirtyValues).forEach(function (key) {
        formState.values = setIn(formState.values, key, savedDirtyValues[key]);
      });
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },
    isValidationPaused: function isValidationPaused() {
      return validationPaused;
    },
    pauseValidation: function pauseValidation(preventNotification) {
      if (preventNotification === void 0) {
        preventNotification = true;
      }

      validationPaused = true;
      preventNotificationWhileValidationPaused = preventNotification;
    },
    registerField: function registerField(name, subscriber, subscription, fieldConfig) {
      if (subscription === void 0) {
        subscription = {};
      }

      if (!state.fieldSubscribers[name]) {
        state.fieldSubscribers[name] = {
          index: 0,
          entries: {}
        };
      }

      var index = state.fieldSubscribers[name].index++; // save field subscriber callback

      state.fieldSubscribers[name].entries[index] = {
        subscriber: memoize(subscriber),
        subscription: subscription,
        notified: false
      };

      if (!state.fields[name]) {
        // create initial field state
        state.fields[name] = {
          active: false,
          afterSubmit: fieldConfig && fieldConfig.afterSubmit,
          beforeSubmit: fieldConfig && fieldConfig.beforeSubmit,
          blur: function blur() {
            return api.blur(name);
          },
          change: function change(value) {
            return api.change(name, value);
          },
          data: fieldConfig && fieldConfig.data || {},
          focus: function focus() {
            return api.focus(name);
          },
          isEqual: fieldConfig && fieldConfig.isEqual || tripleEquals,
          lastFieldState: undefined,
          modified: false,
          modifiedSinceLastSubmit: false,
          name: name,
          touched: false,
          valid: true,
          validateFields: fieldConfig && fieldConfig.validateFields,
          validators: {},
          validating: false,
          visited: false
        };
      }

      var haveValidator = false;
      var silent = fieldConfig && fieldConfig.silent;

      var notify = function notify() {
        if (silent) {
          notifyFieldListeners(name);
        } else {
          notifyFormListeners();
          notifyFieldListeners();
        }
      };

      if (fieldConfig) {
        haveValidator = !!(fieldConfig.getValidator && fieldConfig.getValidator());

        if (fieldConfig.getValidator) {
          state.fields[name].validators[index] = fieldConfig.getValidator;
        }

        var noValueInFormState = getIn(state.formState.values, name) === undefined;

        if (fieldConfig.initialValue !== undefined && noValueInFormState && (getIn(state.formState.values, name) === undefined || getIn(state.formState.values, name) === getIn(state.formState.initialValues, name)) // only initialize if we don't yet have any value for this field
        ) {
            state.formState.initialValues = setIn(state.formState.initialValues || {}, name, fieldConfig.initialValue);
            state.formState.values = setIn(state.formState.values, name, fieldConfig.initialValue);
            runValidation(undefined, notify);
          } // only use defaultValue if we don't yet have any value for this field


        if (fieldConfig.defaultValue !== undefined && fieldConfig.initialValue === undefined && getIn(state.formState.initialValues, name) === undefined && noValueInFormState) {
          state.formState.values = setIn(state.formState.values, name, fieldConfig.defaultValue);
        }
      }

      if (haveValidator) {
        runValidation(undefined, notify);
      } else {
        notify();
      }

      return function () {
        var validatorRemoved = false; // istanbul ignore next

        if (state.fields[name]) {
          // state.fields[name] may have been removed by a mutator
          validatorRemoved = !!(state.fields[name].validators[index] && state.fields[name].validators[index]());
          delete state.fields[name].validators[index];
        }

        var hasFieldSubscribers = !!state.fieldSubscribers[name];

        if (hasFieldSubscribers) {
          // state.fieldSubscribers[name] may have been removed by a mutator
          delete state.fieldSubscribers[name].entries[index];
        }

        var lastOne = hasFieldSubscribers && !Object.keys(state.fieldSubscribers[name].entries).length;

        if (lastOne) {
          delete state.fieldSubscribers[name];
          delete state.fields[name];

          if (validatorRemoved) {
            state.formState.errors = setIn(state.formState.errors, name, undefined) || {};
          }

          if (destroyOnUnregister) {
            state.formState.values = setIn(state.formState.values, name, undefined, true) || {};
          }
        }

        if (!silent) {
          if (validatorRemoved) {
            runValidation(undefined, function () {
              notifyFormListeners();
              notifyFieldListeners();
            });
          } else if (lastOne) {
            // values or errors may have changed
            notifyFormListeners();
          }
        }
      };
    },
    reset: function reset(initialValues) {
      if (initialValues === void 0) {
        initialValues = state.formState.initialValues;
      }

      if (state.formState.submitting) {
        state.formState.resetWhileSubmitting = true;
      }

      state.formState.submitFailed = false;
      state.formState.submitSucceeded = false;
      delete state.formState.submitError;
      delete state.formState.submitErrors;
      delete state.formState.lastSubmittedValues;
      api.initialize(initialValues || {});
    },

    /**
     * Resets all field flags (e.g. touched, visited, etc.) to their initial state
     */
    resetFieldState: function resetFieldState(name) {
      state.fields[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fields[name], {
        active: false,
        lastFieldState: undefined,
        modified: false,
        touched: false,
        valid: true,
        validating: false,
        visited: false
      });
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },

    /**
     * Returns the form to a clean slate; that is:
     * - Clear all values
     * - Resets all fields to their initial state
     */
    restart: function restart(initialValues) {
      if (initialValues === void 0) {
        initialValues = state.formState.initialValues;
      }

      api.batch(function () {
        for (var name in state.fields) {
          api.resetFieldState(name);
          state.fields[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fields[name], {
            active: false,
            lastFieldState: undefined,
            modified: false,
            modifiedSinceLastSubmit: false,
            touched: false,
            valid: true,
            validating: false,
            visited: false
          });
        }

        api.reset(initialValues);
      });
    },
    resumeValidation: function resumeValidation() {
      validationPaused = false;
      preventNotificationWhileValidationPaused = false;

      if (validationBlocked) {
        // validation was attempted while it was paused, so run it now
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
      }

      validationBlocked = false;
    },
    setConfig: function setConfig(name, value) {
      switch (name) {
        case 'debug':
          debug = value;
          break;

        case 'destroyOnUnregister':
          destroyOnUnregister = value;
          break;

        case 'initialValues':
          api.initialize(value);
          break;

        case 'keepDirtyOnReinitialize':
          keepDirtyOnReinitialize = value;
          break;

        case 'mutators':
          mutators = value;

          if (value) {
            Object.keys(mutatorsApi).forEach(function (key) {
              if (!(key in value)) {
                delete mutatorsApi[key];
              }
            });
            Object.keys(value).forEach(function (key) {
              mutatorsApi[key] = getMutatorApi(key);
            });
          } else {
            Object.keys(mutatorsApi).forEach(function (key) {
              delete mutatorsApi[key];
            });
          }

          break;

        case 'onSubmit':
          onSubmit = value;
          break;

        case 'validate':
          validate = value;
          runValidation(undefined, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
          break;

        case 'validateOnBlur':
          validateOnBlur = value;
          break;

        default:
          throw new Error('Unrecognised option ' + name);
      }
    },
    submit: function submit() {
      var formState = state.formState;

      if (formState.submitting) {
        return;
      }

      delete formState.submitErrors;
      delete formState.submitError;
      formState.lastSubmittedValues = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formState.values);

      if (hasSyncErrors()) {
        markAllFieldsTouched();
        state.formState.submitFailed = true;
        notifyFormListeners();
        notifyFieldListeners();
        return; // no submit for you!!
      }

      var asyncValidationPromisesKeys = Object.keys(asyncValidationPromises);

      if (asyncValidationPromisesKeys.length) {
        // still waiting on async validation to complete...
        Promise.all(asyncValidationPromisesKeys.map(function (key) {
          return asyncValidationPromises[Number(key)];
        })).then(api.submit, console.error);
        return;
      }

      var submitIsBlocked = beforeSubmit();

      if (submitIsBlocked) {
        return;
      }

      var resolvePromise;
      var completeCalled = false;

      var complete = function complete(errors) {
        formState.submitting = false;
        var resetWhileSubmitting = formState.resetWhileSubmitting;

        if (resetWhileSubmitting) {
          formState.resetWhileSubmitting = false;
        }

        if (errors && hasAnyError(errors)) {
          formState.submitFailed = true;
          formState.submitSucceeded = false;
          formState.submitErrors = errors;
          formState.submitError = errors[FORM_ERROR];
          markAllFieldsTouched();
        } else {
          if (!resetWhileSubmitting) {
            formState.submitFailed = false;
            formState.submitSucceeded = true;
          }

          afterSubmit();
        }

        notifyFormListeners();
        notifyFieldListeners();
        completeCalled = true;

        if (resolvePromise) {
          resolvePromise(errors);
        }

        return errors;
      };

      formState.submitting = true;
      formState.submitFailed = false;
      formState.submitSucceeded = false;
      formState.lastSubmittedValues = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formState.values);
      resetModifiedAfterSubmit(); // onSubmit is either sync, callback or async with a Promise

      var result = onSubmit(formState.values, api, complete);

      if (!completeCalled) {
        if (result && isPromise(result)) {
          // onSubmit is async with a Promise
          notifyFormListeners(); // let everyone know we are submitting

          notifyFieldListeners(); // notify fields also

          return result.then(complete, function (error) {
            complete();
            throw error;
          });
        } else if (onSubmit.length >= 3) {
          // must be async, so we should return a Promise
          notifyFormListeners(); // let everyone know we are submitting

          notifyFieldListeners(); // notify fields also

          return new Promise(function (resolve) {
            resolvePromise = resolve;
          });
        } else {
          // onSubmit is sync
          complete(result);
        }
      }
    },
    subscribe: function subscribe(subscriber, subscription) {
      if (!subscriber) {
        throw new Error('No callback given.');
      }

      if (!subscription) {
        throw new Error('No subscription provided. What values do you want to listen to?');
      }

      var memoized = memoize(subscriber);
      var subscribers = state.subscribers;
      var index = subscribers.index++;
      subscribers.entries[index] = {
        subscriber: memoized,
        subscription: subscription,
        notified: false
      };
      var nextFormState = calculateNextFormState();
      notifySubscriber(memoized, subscription, nextFormState, nextFormState, filterFormState, true);
      return function () {
        delete subscribers.entries[index];
      };
    }
  };
  return api;
}



/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/react-final-form/dist/react-final-form.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-final-form/dist/react-final-form.es.js ***!
  \*******************************************************************/
/*! exports provided: Field, Form, FormSpy, useField, useForm, useFormState, version, withTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return ReactFinalForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSpy", function() { return FormSpy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useField", function() { return useField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormState", function() { return useFormState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTypes", function() { return withTypes; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! final-form */ "./node_modules/final-form/dist/final-form.es.js");




 // shared logic between components that use either render prop,
// children render function, or component prop

function renderComponent(props, lazyProps, name) {
  var render = props.render,
      children = props.children,
      component = props.component,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["render", "children", "component"]);

  if (component) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](component, Object.assign(lazyProps, rest, {
      children: children,
      render: render
    }));
  }

  if (render) {
    return render(children === undefined ? Object.assign(lazyProps, rest) : // inject children back in
    Object.assign(lazyProps, rest, {
      children: children
    }));
  }

  if (typeof children !== 'function') {
    throw new Error("Must specify either a render prop, a render function as children, or a component prop to " + name);
  }

  return children(Object.assign(lazyProps, rest));
}

function useWhenValueChanges(value, callback, isEqual) {
  if (isEqual === void 0) {
    isEqual = function isEqual(a, b) {
      return a === b;
    };
  }

  var previous = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(value);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!isEqual(value, previous.current)) {
      callback();
      previous.current = value;
    }
  });
}
/**
 * A simple hook to create a constant value that lives for
 * the lifetime of the component.
 *
 * Plagiarized from https://github.com/Andarist/use-constant
 *
 * Do NOT reuse this code unless you know what you're doing.
 * Use Andarist's hook; it's more fault tolerant to things like
 * falsy values.
 *
 * @param {Function} init - A function to generate the value
 */


function useConstant(init) {
  var ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();

  if (!ref.current) {
    ref.current = init();
  }

  return ref.current;
}

var shallowEqual = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== 'object' || !a || typeof b !== 'object' || !b) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

var isSyntheticEvent = function isSyntheticEvent(candidate) {
  return !!(candidate && typeof candidate.stopPropagation === 'function');
};

var ReactFinalFormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createContext"]();

function useLatest(value) {
  var ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(value);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    ref.current = value;
  });
  return ref;
}

var version = "6.5.3";

var addLazyState = function addLazyState(dest, state, keys) {
  keys.forEach(function (key) {
    Object.defineProperty(dest, key, {
      get: function get() {
        return state[key];
      },
      enumerable: true
    });
  });
};

var addLazyFormState = function addLazyFormState(dest, state) {
  return addLazyState(dest, state, ['active', 'dirty', 'dirtyFields', 'dirtySinceLastSubmit', 'dirtyFieldsSinceLastSubmit', 'error', 'errors', 'hasSubmitErrors', 'hasValidationErrors', 'initialValues', 'invalid', 'modified', 'modifiedSinceLastSubmit', 'pristine', 'submitError', 'submitErrors', 'submitFailed', 'submitSucceeded', 'submitting', 'touched', 'valid', 'validating', 'values', 'visited']);
};

var addLazyFieldMetaState = function addLazyFieldMetaState(dest, state) {
  return addLazyState(dest, state, ['active', 'data', 'dirty', 'dirtySinceLastSubmit', 'error', 'initial', 'invalid', 'length', 'modified', 'modifiedSinceLastSubmit', 'pristine', 'submitError', 'submitFailed', 'submitSucceeded', 'submitting', 'touched', 'valid', 'validating', 'visited']);
};

var versions = {
  'final-form': final_form__WEBPACK_IMPORTED_MODULE_3__["version"],
  'react-final-form': version
};
var all$1 = final_form__WEBPACK_IMPORTED_MODULE_3__["formSubscriptionItems"].reduce(function (result, key) {
  result[key] = true;
  return result;
}, {});

function ReactFinalForm(_ref) {
  var debug = _ref.debug,
      decorators = _ref.decorators,
      destroyOnUnregister = _ref.destroyOnUnregister,
      alternateFormApi = _ref.form,
      initialValues = _ref.initialValues,
      initialValuesEqual = _ref.initialValuesEqual,
      keepDirtyOnReinitialize = _ref.keepDirtyOnReinitialize,
      mutators = _ref.mutators,
      onSubmit = _ref.onSubmit,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all$1 : _ref$subscription,
      validate = _ref.validate,
      validateOnBlur = _ref.validateOnBlur,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["debug", "decorators", "destroyOnUnregister", "form", "initialValues", "initialValuesEqual", "keepDirtyOnReinitialize", "mutators", "onSubmit", "subscription", "validate", "validateOnBlur"]);

  var config = {
    debug: debug,
    destroyOnUnregister: destroyOnUnregister,
    initialValues: initialValues,
    keepDirtyOnReinitialize: keepDirtyOnReinitialize,
    mutators: mutators,
    onSubmit: onSubmit,
    validate: validate,
    validateOnBlur: validateOnBlur
  };
  var form = useConstant(function () {
    var f = alternateFormApi || Object(final_form__WEBPACK_IMPORTED_MODULE_3__["createForm"])(config); // pause validation until children register all fields on first render (unpaused in useEffect() below)

    f.pauseValidation();
    return f;
  }); // synchronously register and unregister to query form state for our subscription on first render

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    var initialState = {};
    form.subscribe(function (state) {
      initialState = state;
    }, subscription)();
    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1]; // save a copy of state that can break through the closure
  // on the shallowEqual() line below.


  var stateRef = useLatest(state);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    // We have rendered, so all fields are now registered, so we can unpause validation
    form.isValidationPaused() && form.resumeValidation();
    var unsubscriptions = [form.subscribe(function (s) {
      if (!shallowEqual(s, stateRef.current)) {
        setState(s);
      }
    }, subscription)].concat(decorators ? decorators.map(function (decorator) {
      return (// this noop ternary is to appease the flow gods
        // istanbul ignore next
        decorator(form)
      );
    }) : []);
    return function () {
      form.pauseValidation(); // pause validation so we don't revalidate on every field deregistration

      unsubscriptions.reverse().forEach(function (unsubscribe) {
        return unsubscribe();
      }); // don't need to resume validation here; either unmounting, or will re-run this hook with new deps
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decorators]); // warn about decorator changes
  // istanbul ignore next

  if (true) {
    // You're never supposed to use hooks inside a conditional, but in this
    // case we can be certain that you're not going to be changing your
    // NODE_ENV between renders, so this is safe.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useWhenValueChanges(decorators, function () {
      console.error('Form decorators should not change from one render to the next as new values will be ignored');
    }, shallowEqual);
  } // allow updatable config


  useWhenValueChanges(debug, function () {
    form.setConfig('debug', debug);
  });
  useWhenValueChanges(destroyOnUnregister, function () {
    form.destroyOnUnregister = !!destroyOnUnregister;
  });
  useWhenValueChanges(keepDirtyOnReinitialize, function () {
    form.setConfig('keepDirtyOnReinitialize', keepDirtyOnReinitialize);
  });
  useWhenValueChanges(initialValues, function () {
    form.setConfig('initialValues', initialValues);
  }, initialValuesEqual || shallowEqual);
  useWhenValueChanges(mutators, function () {
    form.setConfig('mutators', mutators);
  });
  useWhenValueChanges(onSubmit, function () {
    form.setConfig('onSubmit', onSubmit);
  });
  useWhenValueChanges(validate, function () {
    form.setConfig('validate', validate);
  });
  useWhenValueChanges(validateOnBlur, function () {
    form.setConfig('validateOnBlur', validateOnBlur);
  });

  var handleSubmit = function handleSubmit(event) {
    if (event) {
      // sometimes not true, e.g. React Native
      if (typeof event.preventDefault === 'function') {
        event.preventDefault();
      }

      if (typeof event.stopPropagation === 'function') {
        // prevent any outer forms from receiving the event too
        event.stopPropagation();
      }
    }

    return form.submit();
  };

  var renderProps = {
    form: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, form, {
      reset: function reset(eventOrValues) {
        if (isSyntheticEvent(eventOrValues)) {
          // it's a React SyntheticEvent, call reset with no arguments
          form.reset();
        } else {
          form.reset(eventOrValues);
        }
      }
    }),
    handleSubmit: handleSubmit
  };
  addLazyFormState(renderProps, state);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ReactFinalFormContext.Provider, {
    value: form
  }, renderComponent(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    __versions: versions
  }), renderProps, 'ReactFinalForm'));
}

function useForm(componentName) {
  var form = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](ReactFinalFormContext);

  if (!form) {
    throw new Error((componentName || 'useForm') + " must be used inside of a <Form> component");
  }

  return form;
}

function useFormState(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      onChange = _ref.onChange,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all$1 : _ref$subscription;

  var form = useForm('useFormState');
  var firstRender = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](true);
  var onChangeRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](onChange);
  onChangeRef.current = onChange; // synchronously register and unregister to query field state for our subscription on first render

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    var initialState = {};
    form.subscribe(function (state) {
      initialState = state;
    }, subscription)();

    if (onChange) {
      onChange(initialState);
    }

    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    return form.subscribe(function (newState) {
      if (firstRender.current) {
        firstRender.current = false;
      } else {
        setState(newState);

        if (onChangeRef.current) {
          onChangeRef.current(newState);
        }
      }
    }, subscription);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var lazyState = {};
  addLazyFormState(lazyState, state);
  return lazyState;
}

function FormSpy(_ref) {
  var onChange = _ref.onChange,
      subscription = _ref.subscription,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["onChange", "subscription"]);

  var reactFinalForm = useForm('FormSpy');
  var state = useFormState({
    onChange: onChange,
    subscription: subscription
  });

  if (onChange) {
    return null;
  }

  var renderProps = {
    form: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reactFinalForm, {
      reset: function reset(eventOrValues) {
        if (isSyntheticEvent(eventOrValues)) {
          // it's a React SyntheticEvent, call reset with no arguments
          reactFinalForm.reset();
        } else {
          reactFinalForm.reset(eventOrValues);
        }
      }
    })
  };
  return renderComponent(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, renderProps), state, 'FormSpy');
}

var isReactNative = typeof window !== 'undefined' && window.navigator && window.navigator.product && window.navigator.product === 'ReactNative';

var getSelectedValues = function getSelectedValues(options) {
  var result = [];

  if (options) {
    for (var index = 0; index < options.length; index++) {
      var option = options[index];

      if (option.selected) {
        result.push(option.value);
      }
    }
  }

  return result;
};

var getValue = function getValue(event, currentValue, valueProp, isReactNative) {
  if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
    return event.nativeEvent.text;
  }

  if (isReactNative && event.nativeEvent) {
    return event.nativeEvent.text;
  }

  var detypedEvent = event;
  var _detypedEvent$target = detypedEvent.target,
      type = _detypedEvent$target.type,
      value = _detypedEvent$target.value,
      checked = _detypedEvent$target.checked;

  switch (type) {
    case 'checkbox':
      if (valueProp !== undefined) {
        // we are maintaining an array, not just a boolean
        if (checked) {
          // add value to current array value
          return Array.isArray(currentValue) ? currentValue.concat(valueProp) : [valueProp];
        } else {
          // remove value from current array value
          if (!Array.isArray(currentValue)) {
            return currentValue;
          }

          var index = currentValue.indexOf(valueProp);

          if (index < 0) {
            return currentValue;
          } else {
            return currentValue.slice(0, index).concat(currentValue.slice(index + 1));
          }
        }
      } else {
        // it's just a boolean
        return !!checked;
      }

    case 'select-multiple':
      return getSelectedValues(event.target.options);

    default:
      return value;
  }
};

var all = final_form__WEBPACK_IMPORTED_MODULE_3__["fieldSubscriptionItems"].reduce(function (result, key) {
  result[key] = true;
  return result;
}, {});

var defaultFormat = function defaultFormat(value, name) {
  return value === undefined ? '' : value;
};

var defaultParse = function defaultParse(value, name) {
  return value === '' ? undefined : value;
};

var defaultIsEqual = function defaultIsEqual(a, b) {
  return a === b;
};

function useField(name, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      afterSubmit = _config.afterSubmit,
      allowNull = _config.allowNull,
      component = _config.component,
      data = _config.data,
      defaultValue = _config.defaultValue,
      _config$format = _config.format,
      format = _config$format === void 0 ? defaultFormat : _config$format,
      formatOnBlur = _config.formatOnBlur,
      initialValue = _config.initialValue,
      multiple = _config.multiple,
      _config$parse = _config.parse,
      parse = _config$parse === void 0 ? defaultParse : _config$parse,
      _config$subscription = _config.subscription,
      subscription = _config$subscription === void 0 ? all : _config$subscription,
      type = _config.type,
      validateFields = _config.validateFields,
      _value = _config.value;
  var form = useForm('useField');
  var configRef = useLatest(config);

  var register = function register(callback, silent) {
    return (// avoid using `state` const in any closures created inside `register`
      // because they would refer `state` from current execution context
      // whereas actual `state` would defined in the subsequent `useField` hook
      // execution
      // (that would be caused by `setState` call performed in `register` callback)
      form.registerField(name, callback, subscription, {
        afterSubmit: afterSubmit,
        beforeSubmit: function beforeSubmit() {
          var _configRef$current = configRef.current,
              beforeSubmit = _configRef$current.beforeSubmit,
              formatOnBlur = _configRef$current.formatOnBlur,
              _configRef$current$fo = _configRef$current.format,
              format = _configRef$current$fo === void 0 ? defaultFormat : _configRef$current$fo;

          if (formatOnBlur) {
            var _ref = form.getFieldState(name),
                value = _ref.value;

            var formatted = format(value, name);

            if (formatted !== value) {
              form.change(name, formatted);
            }
          }

          return beforeSubmit && beforeSubmit();
        },
        data: data,
        defaultValue: defaultValue,
        getValidator: function getValidator() {
          return configRef.current.validate;
        },
        initialValue: initialValue,
        isEqual: function isEqual(a, b) {
          return (configRef.current.isEqual || defaultIsEqual)(a, b);
        },
        silent: silent,
        validateFields: validateFields
      })
    );
  };

  var firstRender = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](true); // synchronously register and unregister to query field state for our subscription on first render

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    var initialState = {}; // temporarily disable destroyOnUnregister

    var destroyOnUnregister = form.destroyOnUnregister;
    form.destroyOnUnregister = false;
    register(function (state) {
      initialState = state;
    }, true)(); // return destroyOnUnregister to its original value

    form.destroyOnUnregister = destroyOnUnregister;
    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    return register(function (state) {
      if (firstRender.current) {
        firstRender.current = false;
      } else {
        setState(state);
      }
    }, false);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [name, data, defaultValue, // If we want to allow inline fat-arrow field-level validation functions, we
  // cannot reregister field every time validate function !==.
  // validate,
  initialValue // The validateFields array is often passed as validateFields={[]}, creating
  // a !== new array every time. If it needs to be changed, a rerender/reregister
  // can be forced by changing the key prop
  // validateFields
  ]);
  var handlers = {
    onBlur: react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (event) {
      state.blur();

      if (formatOnBlur) {
        /**
         * Here we must fetch the value directly from Final Form because we cannot
         * trust that our `state` closure has the most recent value. This is a problem
         * if-and-only-if the library consumer has called `onChange()` immediately
         * before calling `onBlur()`, but before the field has had a chance to receive
         * the value update from Final Form.
         */
        var fieldState = form.getFieldState(state.name);
        state.change(format(fieldState.value, state.name));
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.blur, state.name, format, formatOnBlur]),
    onChange: react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (event) {
      // istanbul ignore next
      if ( true && event && event.target) {
        var targetType = event.target.type;
        var unknown = ~['checkbox', 'radio', 'select-multiple'].indexOf(targetType) && !type && component !== 'select';

        var _value2 = targetType === 'select-multiple' ? state.value : _value;

        if (unknown) {
          console.error("You must pass `type=\"" + (targetType === 'select-multiple' ? 'select' : targetType) + "\"` prop to your Field(" + name + ") component.\n" + ("Without it we don't know how to unpack your `value` prop - " + (Array.isArray(_value2) ? "[" + _value2 + "]" : "\"" + _value2 + "\"") + "."));
        }
      }

      var value = event && event.target ? getValue(event, state.value, _value, isReactNative) : event;
      state.change(parse(value, name));
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [_value, name, parse, state.change, state.value, type]),
    onFocus: react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (event) {
      state.focus();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.focus])
  };
  var meta = {};
  addLazyFieldMetaState(meta, state);

  var input = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: name,

    get value() {
      var value = state.value;

      if (formatOnBlur) {
        if (component === 'input') {
          value = defaultFormat(value);
        }
      } else {
        value = format(value, name);
      }

      if (value === null && !allowNull) {
        value = '';
      }

      if (type === 'checkbox' || type === 'radio') {
        return _value;
      } else if (component === 'select' && multiple) {
        return value || [];
      }

      return value;
    },

    get checked() {
      var value = state.value;

      if (type === 'checkbox') {
        value = format(value, name);

        if (_value === undefined) {
          return !!value;
        } else {
          return !!(Array.isArray(value) && ~value.indexOf(_value));
        }
      } else if (type === 'radio') {
        return format(value, name) === _value;
      }

      return undefined;
    }

  }, handlers);

  if (multiple) {
    input.multiple = multiple;
  }

  if (type !== undefined) {
    input.type = type;
  }

  var renderProps = {
    input: input,
    meta: meta
  }; // assign to force Flow check

  return renderProps;
}

var Field = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Field(_ref, ref) {
  var afterSubmit = _ref.afterSubmit,
      allowNull = _ref.allowNull,
      beforeSubmit = _ref.beforeSubmit,
      children = _ref.children,
      component = _ref.component,
      data = _ref.data,
      defaultValue = _ref.defaultValue,
      format = _ref.format,
      formatOnBlur = _ref.formatOnBlur,
      initialValue = _ref.initialValue,
      isEqual = _ref.isEqual,
      multiple = _ref.multiple,
      name = _ref.name,
      parse = _ref.parse,
      subscription = _ref.subscription,
      type = _ref.type,
      validate = _ref.validate,
      validateFields = _ref.validateFields,
      value = _ref.value,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["afterSubmit", "allowNull", "beforeSubmit", "children", "component", "data", "defaultValue", "format", "formatOnBlur", "initialValue", "isEqual", "multiple", "name", "parse", "subscription", "type", "validate", "validateFields", "value"]);

  var field = useField(name, {
    afterSubmit: afterSubmit,
    allowNull: allowNull,
    beforeSubmit: beforeSubmit,
    children: children,
    component: component,
    data: data,
    defaultValue: defaultValue,
    format: format,
    formatOnBlur: formatOnBlur,
    initialValue: initialValue,
    isEqual: isEqual,
    multiple: multiple,
    parse: parse,
    subscription: subscription,
    type: type,
    validate: validate,
    validateFields: validateFields,
    value: value
  });

  if (typeof children === 'function') {
    return children(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, rest));
  }

  if (typeof component === 'string') {
    // ignore meta, combine input with any other props
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field.input, {
      children: children,
      ref: ref
    }, rest));
  }

  if (!name) {
    throw new Error('prop name cannot be undefined in <Field> component');
  }

  return renderComponent(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    children: children,
    component: component,
    ref: ref
  }, rest), field, "Field(" + name + ")");
});

function withTypes() {
  return {
    Form: ReactFinalForm,
    FormSpy: FormSpy
  };
}



/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function () {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};

  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }

  return descriptors;
};

var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  } // Allow for deprecating things in the process of starting up.


  if (typeof process === 'undefined') {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = Object({"NODE_ENV":"development","PUBLIC_URL":undefined,"WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"REACT_APP_CMC_KEY":"3b3805da-f1c9-49e0-b771-1dbc44005362"}).NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];

    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};

exports.promisify.custom = kCustomPromisifiedSymbol;

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }

  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  } // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.


  function callbackified() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();

    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }

    var self = this;

    var cb = function () {
      return maybeCb.apply(self, arguments);
    }; // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)


    original.apply(this, args).then(function (ret) {
      process.nextTick(cb, null, ret);
    }, function (rej) {
      process.nextTick(callbackifyOnRejected, rej, cb);
    });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}

exports.callbackify = callbackify;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/components/FormInput/index.tsx":
/*!********************************************!*\
  !*** ./src/components/FormInput/index.tsx ***!
  \********************************************/
/*! exports provided: StyledTextField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTextField", function() { return StyledTextField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/FormInput/index.tsx";




const StyledTextField = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  root: {
    height: 50,
    width: '100%',
    margin: '17.5px 0px',
    '& label.Mui-focused': {
      color: 'green'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#669900'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#669900',
        borderWidth: '2px'
      },
      '&:hover fieldset': {
        borderColor: '#f59842',
        borderWidth: '2px'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#669900',
        borderWidth: '2px'
      }
    },
    '& .Mui-error': {
      fontSize: '10px'
    }
  }
}))(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], { ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 40,
  columnNumber: 21
}, undefined));

const TextFieldInput = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledTextField, {
  error: props.meta.touched && props.meta.error,
  helperText: props.meta.touched && props.meta.error,
  InputProps: { ...props.InputProps,
    style: {
      fontSize: 14
    }
  },
  InputLabelProps: {
    style: {
      fontSize: 14,
      color: '#6d758d'
    }
  },
  onChange: (event, index, value) => props.input.onChange(value),
  value: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(props, 'input.value', ''),
  variant: "outlined",
  ...props.input,
  ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 43,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (TextFieldInput);

/***/ }),

/***/ "./src/components/Profile/SignIn.tsx":
/*!*******************************************!*\
  !*** ./src/components/Profile/SignIn.tsx ***!
  \*******************************************/
/*! exports provided: SignIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormInput */ "./src/components/FormInput/index.tsx");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/helpers */ "./src/services/helpers.ts");
/* harmony import */ var _services_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/validation */ "./src/services/validation.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Profile/SignIn.tsx";








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  signInContainer: {
    height: '100%',
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  heading: {
    fontSize: 22,
    lineHeight: '32px',
    fontWeight: 700,
    letterSpacing: '1px',
    marginRight: 'auto'
  },
  headerButton: {
    color: '#4A6EE0',
    fontSize: 14,
    lineHeight: '22px',
    backgroundColor: '#fff',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  form: {
    marginTop: 50
  },
  submitButton: {
    marginTop: 15,
    width: '100%',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '14px',
    textTransform: 'capitalize',
    backgroundColor: '#11a683'
  }
}));
const SignIn = ({
  toggleForm
}) => {
  const classes = useStyles();

  const handleSubmit = values => {
    console.log('Submitted!');
    console.log(values);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: classes.signInContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: classes.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
        className: classes.heading,
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
        className: classes.headerButton,
        onClick: () => toggleForm(),
        children: "I don't have an account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: handleSubmit,
      render: ({
        handleSubmit,
        valid
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
        className: classes.form,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
          component: _FormInput__WEBPACK_IMPORTED_MODULE_4__["default"],
          format: _services_helpers__WEBPACK_IMPORTED_MODULE_5__["normalizeText"],
          fullWidth: true,
          label: "Email",
          name: "email",
          type: "email",
          validate: Object(_services_validation__WEBPACK_IMPORTED_MODULE_6__["setUpValidation"])(_services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].required, _services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].email)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
          component: _FormInput__WEBPACK_IMPORTED_MODULE_4__["default"],
          format: _services_helpers__WEBPACK_IMPORTED_MODULE_5__["normalizeText"],
          fullWidth: true,
          label: "Password",
          name: "password",
          type: "password",
          validate: Object(_services_validation__WEBPACK_IMPORTED_MODULE_6__["setUpValidation"])(_services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].required, _services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].minLength8)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: classes.submitButton,
          disabled: !valid,
          size: "medium",
          type: "submit",
          variant: "contained",
          onClick: handleSubmit,
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./src/components/Profile/SignUp.tsx":
/*!*******************************************!*\
  !*** ./src/components/Profile/SignUp.tsx ***!
  \*******************************************/
/*! exports provided: SignUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormInput */ "./src/components/FormInput/index.tsx");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/helpers */ "./src/services/helpers.ts");
/* harmony import */ var _services_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/validation */ "./src/services/validation.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/geekyants/Desktop/Hackathon-21/crypto-base/src/components/Profile/SignUp.tsx";








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  signUpContainer: {
    height: '100%',
    padding: 30,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  heading: {
    fontSize: 22,
    lineHeight: '32px',
    fontWeight: 700,
    letterSpacing: '1px',
    marginRight: 'auto'
  },
  headerButton: {
    color: '#4A6EE0',
    fontSize: 14,
    lineHeight: '22px',
    backgroundColor: '#fff',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  form: {
    marginTop: 50
  },
  submitButton: {
    marginTop: 15,
    width: '100%',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '14px',
    textTransform: 'capitalize',
    backgroundColor: '#11a683'
  }
}));
const SignUp = ({
  toggleForm
}) => {
  const classes = useStyles();

  const handleSubmit = values => {
    console.log('Submitted!');
    console.log(values);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: classes.signUpContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: classes.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
        className: classes.heading,
        children: "Sign up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
        className: classes.headerButton,
        onClick: () => toggleForm(),
        children: "I have an account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: handleSubmit,
      render: ({
        handleSubmit,
        valid
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
        className: classes.form,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
          component: _FormInput__WEBPACK_IMPORTED_MODULE_4__["default"],
          format: _services_helpers__WEBPACK_IMPORTED_MODULE_5__["normalizeText"],
          fullWidth: true,
          label: "Email",
          name: "email",
          type: "email",
          validate: Object(_services_validation__WEBPACK_IMPORTED_MODULE_6__["setUpValidation"])(_services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].required, _services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].email)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
          component: _FormInput__WEBPACK_IMPORTED_MODULE_4__["default"],
          format: _services_helpers__WEBPACK_IMPORTED_MODULE_5__["normalizeText"],
          fullWidth: true,
          label: "Password",
          name: "password",
          type: "password",
          validate: Object(_services_validation__WEBPACK_IMPORTED_MODULE_6__["setUpValidation"])(_services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].required, _services_validation__WEBPACK_IMPORTED_MODULE_6__["validations"].minLength8)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: classes.submitButton,
          disabled: !valid,
          size: "medium",
          type: "submit",
          variant: "contained",
          onClick: handleSubmit,
          children: "Continue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./src/services/validation.ts":
/*!************************************!*\
  !*** ./src/services/validation.ts ***!
  \************************************/
/*! exports provided: validations, setUpValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validations", function() { return validations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpValidation", function() { return setUpValidation; });
/* harmony import */ var _sideway_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sideway/address */ "./node_modules/@sideway/address/lib/index.js");
/* harmony import */ var _sideway_address__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sideway_address__WEBPACK_IMPORTED_MODULE_0__);
 //Validations

const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined;

const validations = {
  required: value => value ? undefined : 'Required',
  minLength8: minLength(8),
  email: value => value && !_sideway_address__WEBPACK_IMPORTED_MODULE_0__["email"].isValid(value) ? 'Invalid email address' : undefined
};
const setUpValidation = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);

/***/ })

})
//# sourceMappingURL=app.4b10b1852aab3e8cc5f4.hot-update.js.map