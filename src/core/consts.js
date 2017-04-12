'use strict';

// Used in Fiversified Sampler aggrenation
exports.EXECUTION_HINT_SET = new Set(
    ['map', 'global_ordinals', 'global_ordinals_hash', 'global_ordinals_low_cardinalit']
);

// Used in Geo Point Aggregation
exports.UNIT_SET = new Set(
    [
        'in', 'inch',
        'yd', 'yards',
        'ft', 'feet',
        'km', 'kilometers',
        'NM', 'nmi', 'nauticalmiles',
        'mm', 'millimeters',
        'cm', 'centimeters',
        'mi', 'miles',
        'm', 'meters'
    ]
);

exports.MODEL_SET = new Set(['simple', 'linear', 'ewma', 'holt', 'holt_winters']);

exports.SORT_MODE_SET = new Set(['min', 'max', 'sum', 'avg', 'median']);

exports.RESCORE_MODE_SET = new Set(['total', 'multiply', 'min', 'max', 'avg']);

exports.REWRITE_METHOD_SET = new Set(
    [
        'constant_score', 'constant_score_auto', 'constant_score_filter',
        'scoring_boolean', 'constant_score_boolean', 'top_terms_N',
        'top_terms_boost_N', 'top_terms_blended_freqs_N'
    ]
);

exports.MULTI_MATCH_TYPE = new Set(
    ['best_fields', 'most_fields', 'cross_fields', 'phrase', 'phrase_prefix']
);

exports.SCORE_MODE_SET = new Set(['multiply', 'sum', 'first', 'min', 'max', 'avg']);

exports.BOOST_MODE_SET = new Set(['multiply', 'sum', 'replace', 'min', 'max', 'avg']);

exports.FIELD_MODIFIER_SET = new Set(
    ['none', 'log', 'log1p', 'log2p', 'ln', 'ln1p', 'ln2p', 'square', 'sqrt', 'reciprocal']
);

exports.NESTED_SCORE_MODE_SET = new Set(['none', 'sum', 'min', 'max', 'avg']);

exports.GEO_RELATION_SET = new Set(['WITHIN', 'CONTAINS', 'DISJOINT', 'INTERSECTS']);