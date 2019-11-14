import { createShortlink } from '../createShortlink';

describe('createShortlink', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new shortlink', async () => {
    const mockResponse = {
      shortlink: 'mockShortlink'
    };

    fetch.once(JSON.stringify(mockResponse));

    const shortlink = await createShortlink('mockUrl');

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(shortlink).toEqual('http://localhost/mockShortlink');
  });

  it('should reject if error is returned', async () => {
    const mockResponse = {
      error: 'Incorrect value'
    };
    const expectedError = new Error('Incorrect value');

    fetch.once(JSON.stringify(mockResponse));

    await expect(createShortlink('mockUrl')).rejects.toEqual(expectedError);
  });

  it('should reject if fetch fails', async () => {
    const expectedError = new Error('Fetch failed');

    fetch.mockImplementationOnce(() => {
      throw new Error('Fetch failed');
    });

    await expect(createShortlink('mockUrl')).rejects.toEqual(expectedError);
  });
});
