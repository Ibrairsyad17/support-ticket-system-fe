import { PROVIDER_GET_GQL } from "@/app/api/provider";

const delay = () => new Promise((res) => setTimeout(() => res(), 800));

export const getComplaintsByStatus = async (token, status) => {
  await delay();
  const query = `
    query getAssignments($status: String){
      assignments(
        where: {
          status: {
            equals: $status
          }
        }
      ){
        assignment_date
        id
        assignment_name
        status
        priority
        assignment_detail
      }
   }`;
  const variables = {
    status,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};

export const getLatestComplaints = async (token, take) => {
  await delay();
  const query = `
    query getAssignments($take: Int){
      assignments(
        take: $take,
        orderBy: {
          assignment_date: desc
        }
      ){
        assignment_date
        id
        assignment_name
        status
        priority
        assignment_detail
      }
    }
  `;
  const variables = {
    take,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};

export const getLatestComplaintsByDate = async (token, take) => {
  await delay();
  const query = `
  query getAssignments($take: Int){
    assignments(
      take: $take
      orderBy: {
        assignment_date: desc
      }
    ){
      assignment_date
    }
  }
  `;
  const variables = {
    take,
  };
  const response = await PROVIDER_GET_GQL(token, query, variables);
  return response;
};
