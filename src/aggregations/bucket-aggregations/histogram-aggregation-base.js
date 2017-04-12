'use strict';

const isNil = require('lodash.isnil');

const BucketAggregationBase = require('./bucket-aggregation-base');

/**
 * The `HistogramAggregationBase` provides support for common options used across
 * various histogram `Aggregation` implementations like Histogram Aggregation,
 * Date Histogram aggregation.
 *
 * @extends BucketAggregationBase
 */
class HistogramAggregationBase extends BucketAggregationBase {

    /**
     * Creates an instance of `HistogramAggregationBase`
     *
     * @param {string} name The name which will be used to refer to this aggregation.
     * @param {string} type Type of aggregation
     * @param {string=} field The field to aggregate on
     * @param {string|number=} interval Interval to generate histogram over.
     */
    constructor(name, type, field, interval) {
        super(name, type, field);

        if (!isNil(interval)) this._aggsDef.interval = interval;
    }

    /**
     * Sets the histogram interval. Buckets are generated based on this interval value.
     *
     * @param {string} interval Interval to generate histogram over.
     * For date histograms, available expressions for interval:
     * year, quarter, month, week, day, hour, minute, second
     * @returns {DateHistogramAggregation} returns `this` so that calls can be chained
     */
    interval(interval) {
        this._aggsDef.interval = interval;
        return this;
    }

    /**
     * Sets the format expression for `key_as_string` in response buckets.
     * If no format is specified, then it will use the first format specified in the field mapping.
     *
     * @param {string} fmt Format mask to apply on aggregation response. Example: ####.00.
     * For Date Histograms, supports expressive [date format pattern](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-daterange-aggregation.html#date-format-pattern)
     * @returns {DateHistogramAggregation} returns `this` so that calls can be chained
     */
    format(fmt) {
        this._aggsDef.format = fmt;
        return this;
    }

    /**
     * The offset parameter is used to change the start value of each bucket
     * by the specified positive (+) or negative offset (-).
     * Negative offset is not applicable on HistogramAggregation.
     * In case of DateHistogramAggregation, duration can be
     * a value such as 1h for an hour, or 1d for a day.
     *
     * @param {string} offset Time or bucket key offset for bucketing.
     * @returns {HistogramAggregationBase} returns `this` so that calls can be chained
     */
    offset(offset) {
        this._aggsDef.offset = offset;
        return this;
    }

    /**
     * Sets the ordering for buckets
     *
     * @param {string} key
     * @param {string} direction `asc` or `desc`
     * @returns {HistogramAggregationBase} returns `this` so that calls can be chained
     */
    order(key, direction = 'desc') {
        const directionLower = direction.toLowerCase();

        if (directionLower !== 'asc' &&
            directionLower !== 'desc') {
            throw new Error('`direction` must be either `asc` or `desc`');
        }

        this._aggsDef.order = {
            [key]: directionLower
        };

        return this;
    }

    /**
     * Sets the minimum number of matching documents in range to return the bucket.
     *
     * @param {number} minDocCnt Integer value for minimum number of documents
     * required to return bucket in response
     * @returns {HistogramAggregationBase} returns `this` so that calls can be chained
     */
    minDocCount(minDocCnt) {
        this._aggsDef.min_doc_count = minDocCnt;
        return this;
    }

    /**
     * Set's the range/bounds for the histogram aggregation.
     * Useful when you want to include buckets that might be
     * outside the bounds of indexed documents.
     *
     * @param {number|string} min Start bound / minimum bound value
     * For histogram aggregation, Integer value can be used.
     * For Date histogram, date expression can be used.
     * Available expressions for interval:
     * year, quarter, month, week, day, hour, minute, second
     * @param {number|string} max End bound / maximum bound value
     * For histogram aggregation, Integer value can be used.
     * For Date histogram, date expression can be used.
     * Available expressions for interval:
     * year, quarter, month, week, day, hour, minute, second
     * @returns {HistogramAggregationBase} returns `this` so that calls can be chained
     */
    extendedBounds(min, max) {
        this._aggsDef.extended_bounds = { min, max };
        return this;
    }

    /**
     * Sets the missing parameter which defines how documents
     * that are missing a value should be treated.
     *
     * @param {string} value
     * @returns {HistogramAggregationBase} returns `this` so that calls can be chained
     */
    missing(value) {
        this._aggsDef.missing = value;
        return this;
    }

    /**
     * Enable the response to be returned as a keyed object where the key is the
     * bucket interval.
     *
     * @param {boolean} keyed To enable keyed response or not.
     * @returns {PercentilesAggregation} returns `this` so that calls can be chained
     */
    keyed(keyed) {
        this._aggsDef.keyed = keyed;
        return this;
    }
}

module.exports = HistogramAggregationBase;