import { apiClient } from '../apiClient';

/**
 * Returns watch object given id.
 * @param {string} id of watch.
 * @returns {object} watch object.
 */
function getWatch(id: string): object {
  return apiClient.get(`/watch/${id}`);
}

export { getWatch };
