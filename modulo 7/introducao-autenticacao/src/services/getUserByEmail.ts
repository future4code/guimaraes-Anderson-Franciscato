

export const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
}

function userTableName(userTableName: any) {
    throw new Error("Function not implemented.");
}
