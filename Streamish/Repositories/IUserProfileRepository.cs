using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        void Add(UserProfile userProfile);
        void Delete(int id);
        void Update(UserProfile userProfile);
    }
}