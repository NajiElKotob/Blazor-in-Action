namespace Blazor_in_Action.Client.Classes;

    public interface ILocalStorageService
{
    Task SetItemAsync<T>(string key, T item);
    Task<T> GetItemAsync<T>(string key);
}

